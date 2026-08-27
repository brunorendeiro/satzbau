import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { useOutletContext } from 'react-router-dom'
import { generateCrossword, type CrosswordPuzzle, type PlacedWord, type ClueEntry } from './crossword-engine'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './crossword.css'

type Dir = 'across' | 'down'
type CellWords = { across?: PlacedWord; down?: PlacedWord }

function buildWordMap(puzzle: CrosswordPuzzle): Map<string, CellWords> {
  const map = new Map<string, CellWords>()
  for (const p of puzzle.placed) {
    for (let i = 0; i < p.entry.answer.length; i++) {
      const r = p.dir === 'down' ? p.row + i : p.row
      const c = p.dir === 'across' ? p.col + i : p.col
      const key = `${r},${c}`
      const existing = map.get(key) ?? {}
      existing[p.dir] = p
      map.set(key, existing)
    }
  }
  return map
}

function clueText(entry: ClueEntry, locale: Locale): string {
  return locale === 'en' ? entry.clueEn : entry.cluePt
}

function emptyInput(puzzle: CrosswordPuzzle): string[][] {
  return puzzle.cells.map(row => row.map(() => ''))
}

export default function Crossword() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  const [puzzle, setPuzzle] = useState<CrosswordPuzzle>(() => generateCrossword())
  const [input, setInput] = useState<string[][]>(() => emptyInput(puzzle))
  const [selected, setSelected] = useState<{ row: number; col: number } | null>(null)
  const [dir, setDir] = useState<Dir>('across')
  const [showErrors, setShowErrors] = useState(false)
  const [solved, setSolved] = useState(false)
  const cellRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  const wordMap = useMemo(() => buildWordMap(puzzle), [puzzle])
  const numberAt = useMemo(() => {
    const m = new Map<string, number>()
    puzzle.placed.forEach(p => m.set(`${p.row},${p.col}`, p.number))
    return m
  }, [puzzle])
  const acrossClues = useMemo(() => puzzle.placed.filter(p => p.dir === 'across').sort((a, b) => a.number - b.number), [puzzle])
  const downClues = useMemo(() => puzzle.placed.filter(p => p.dir === 'down').sort((a, b) => a.number - b.number), [puzzle])

  useEffect(() => {
    let allFilled = true
    let allCorrect = true
    for (let r = 0; r < puzzle.height; r++) {
      for (let c = 0; c < puzzle.width; c++) {
        const expected = puzzle.cells[r][c]
        if (!expected) continue
        if (!input[r][c]) allFilled = false
        else if (input[r][c] !== expected) allCorrect = false
      }
    }
    if (allFilled && allCorrect) setSolved(true)
  }, [input, puzzle])

  function newPuzzle() {
    const p = generateCrossword()
    setPuzzle(p)
    setInput(emptyInput(p))
    setSelected(null)
    setShowErrors(false)
    setSolved(false)
  }

  function focusCell(row: number, col: number) {
    cellRefs.current.get(`${row},${col}`)?.focus()
  }

  function selectCell(row: number, col: number) {
    if (!puzzle.cells[row][col]) return
    const words = wordMap.get(`${row},${col}`)
    if (selected && selected.row === row && selected.col === col) {
      if (words?.across && words?.down) setDir(d => (d === 'across' ? 'down' : 'across'))
    } else {
      if (dir === 'across' && !words?.across && words?.down) setDir('down')
      if (dir === 'down' && !words?.down && words?.across) setDir('across')
    }
    setSelected({ row, col })
    focusCell(row, col)
  }

  function selectWord(word: PlacedWord) {
    setDir(word.dir)
    setSelected({ row: word.row, col: word.col })
    focusCell(word.row, word.col)
  }

  function moveSelection(row: number, col: number, d: Dir, delta: number) {
    let r = row
    let c = col
    for (let i = 0; i < 40; i++) {
      r = d === 'down' ? r + delta : r
      c = d === 'across' ? c + delta : c
      if (r < 0 || c < 0 || r >= puzzle.height || c >= puzzle.width) return
      if (puzzle.cells[r][c]) {
        setSelected({ row: r, col: c })
        focusCell(r, c)
        return
      }
    }
  }

  function setLetter(row: number, col: number, letter: string) {
    setInput(prev => {
      const next = prev.map(r => [...r])
      next[row][col] = letter
      return next
    })
  }

  function onCellKeyDown(e: KeyboardEvent<HTMLButtonElement>, row: number, col: number) {
    if (e.key === 'ArrowRight') { e.preventDefault(); setDir('across'); moveSelection(row, col, 'across', 1); return }
    if (e.key === 'ArrowLeft') { e.preventDefault(); setDir('across'); moveSelection(row, col, 'across', -1); return }
    if (e.key === 'ArrowDown') { e.preventDefault(); setDir('down'); moveSelection(row, col, 'down', 1); return }
    if (e.key === 'ArrowUp') { e.preventDefault(); setDir('down'); moveSelection(row, col, 'down', -1); return }
    if (e.key === 'Backspace') {
      e.preventDefault()
      if (input[row][col]) { setLetter(row, col, ''); setShowErrors(false) }
      else moveSelection(row, col, dir, -1)
      return
    }
    if (/^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault()
      setLetter(row, col, e.key.toUpperCase())
      setShowErrors(false)
      moveSelection(row, col, dir, 1)
    }
  }

  const activeWord = selected ? wordMap.get(`${selected.row},${selected.col}`)?.[dir] : null

  function isInActiveWord(r: number, c: number): boolean {
    if (!activeWord) return false
    if (activeWord.dir === 'across') return activeWord.row === r && c >= activeWord.col && c < activeWord.col + activeWord.entry.answer.length
    return activeWord.col === c && r >= activeWord.row && r < activeWord.row + activeWord.entry.answer.length
  }

  return (
    <div className="screen-crossword">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="cw-layout">
        <div>
          <div
            className="cw-grid"
            style={{ gridTemplateColumns: `repeat(${puzzle.width}, 1fr)`, maxWidth: `${puzzle.width * 38}px` }}
          >
            {puzzle.cells.map((rowArr, r) =>
              rowArr.map((cell, c) => {
                if (!cell) return <div key={`${r}-${c}`} className="cw-cell blocked" />
                const isSelected = selected?.row === r && selected?.col === c
                const val = input[r][c]
                const wrong = showErrors && val !== '' && val !== cell
                const right = showErrors && val !== '' && val === cell
                const number = numberAt.get(`${r},${c}`)
                return (
                  <button
                    key={`${r}-${c}`}
                    ref={el => { if (el) cellRefs.current.set(`${r},${c}`, el) }}
                    className={[
                      'cw-cell',
                      isSelected ? 'selected' : isInActiveWord(r, c) ? 'active-word' : '',
                      wrong ? 'wrong' : '',
                      right ? 'right' : '',
                    ].filter(Boolean).join(' ')}
                    onClick={() => selectCell(r, c)}
                    onKeyDown={e => onCellKeyDown(e, r, c)}
                  >
                    {number !== undefined && <span className="cw-number">{number}</span>}
                    <span className="cw-letter">{val}</span>
                  </button>
                )
              }),
            )}
          </div>

          <div className="cw-actions">
            <button className="chip" onClick={() => setShowErrors(true)}>{t.checkButton}</button>
            <button className="chip" onClick={() => { setInput(puzzle.cells.map(row => row.map(c => c ?? ''))); setSolved(true); setShowErrors(false) }}>{t.revealButton}</button>
            <button className="chip" onClick={newPuzzle}>{t.newPuzzleButton}</button>
          </div>

          {solved && <p className="cw-solved">{t.solvedMessage}</p>}
        </div>

        <div className="cw-clues">
          <div className="cw-clue-group">
            <span className="piece-label">{t.acrossLabel}</span>
            <ul>
              {acrossClues.map(w => (
                <li key={w.entry.id} className={activeWord?.entry.id === w.entry.id && dir === 'across' ? 'active' : ''}>
                  <button onClick={() => selectWord(w)}>
                    <span className="cw-clue-number">{w.number}.</span> {clueText(w.entry, locale)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="cw-clue-group">
            <span className="piece-label">{t.downLabel}</span>
            <ul>
              {downClues.map(w => (
                <li key={w.entry.id} className={activeWord?.entry.id === w.entry.id && dir === 'down' ? 'active' : ''}>
                  <button onClick={() => selectWord(w)}>
                    <span className="cw-clue-number">{w.number}.</span> {clueText(w.entry, locale)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
