import { useEffect, useMemo, useRef, useState, type ChangeEvent, type KeyboardEvent } from 'react'
import { useOutletContext } from 'react-router-dom'
import { generateCrossword, WORD_BANK, type CrosswordPuzzle, type PlacedWord, type ClueEntry } from './crossword-engine'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './crossword.css'

type Dir = 'across' | 'down'
type Mode = 'type' | 'choice'
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

function translation(entry: ClueEntry, locale: Locale): string | null {
  if (locale === 'de') return null
  return locale === 'en' ? entry.clueEn : entry.cluePt
}

function emptyInput(puzzle: CrosswordPuzzle): string[][] {
  return puzzle.cells.map(row => row.map(() => ''))
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
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
  const [mode, setMode] = useState<Mode>('type')
  const [activeChoice, setActiveChoice] = useState<{ word: PlacedWord; options: string[] } | null>(null)
  const hiddenInputRef = useRef<HTMLInputElement>(null)

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
    setActiveChoice(null)
  }

  function isWordSolved(word: PlacedWord): boolean {
    for (let i = 0; i < word.entry.answer.length; i++) {
      const r = word.dir === 'down' ? word.row + i : word.row
      const c = word.dir === 'across' ? word.col + i : word.col
      if (input[r][c] !== puzzle.cells[r][c]) return false
    }
    return true
  }

  function openChoice(word: PlacedWord) {
    const others = shuffle(WORD_BANK.filter(w => w.id !== word.entry.id && w.answer !== word.entry.answer)).slice(0, 2).map(w => w.answer)
    setActiveChoice({ word, options: shuffle([word.entry.answer, ...others]) })
  }

  function pickChoice(guess: string) {
    if (!activeChoice) return
    const word = activeChoice.word
    if (guess !== word.entry.answer) return
    setInput(prev => {
      const next = prev.map(r => [...r])
      for (let i = 0; i < word.entry.answer.length; i++) {
        const r = word.dir === 'down' ? word.row + i : word.row
        const c = word.dir === 'across' ? word.col + i : word.col
        next[r][c] = word.entry.answer[i]
      }
      return next
    })
    setActiveChoice(null)
  }

  function focusHiddenInput() {
    // A tiny timeout dodges iOS Safari swallowing focus() calls that happen
    // inside the same tick as the click that triggered them.
    setTimeout(() => hiddenInputRef.current?.focus(), 0)
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
    if (mode !== 'choice') focusHiddenInput()
  }

  function selectWord(word: PlacedWord) {
    setDir(word.dir)
    setSelected({ row: word.row, col: word.col })
    if (mode === 'choice') {
      openChoice(word)
      return
    }
    focusHiddenInput()
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

  function onHiddenKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (!selected) return
    const { row, col } = selected
    if (e.key === 'ArrowRight') { e.preventDefault(); setDir('across'); moveSelection(row, col, 'across', 1); return }
    if (e.key === 'ArrowLeft') { e.preventDefault(); setDir('across'); moveSelection(row, col, 'across', -1); return }
    if (e.key === 'ArrowDown') { e.preventDefault(); setDir('down'); moveSelection(row, col, 'down', 1); return }
    if (e.key === 'ArrowUp') { e.preventDefault(); setDir('down'); moveSelection(row, col, 'down', -1); return }
    if (e.key === 'Backspace') {
      e.preventDefault()
      if (input[row][col]) { setLetter(row, col, ''); setShowErrors(false) }
      else moveSelection(row, col, dir, -1)
    }
  }

  function onHiddenChange(e: ChangeEvent<HTMLInputElement>) {
    const letter = e.target.value.slice(-1).toUpperCase()
    e.target.value = ''
    if (!selected || !/^[A-ZÄÖÜ]$/.test(letter)) return
    setLetter(selected.row, selected.col, letter)
    setShowErrors(false)
    moveSelection(selected.row, selected.col, dir, 1)
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

      <div className="cw-mode-section">
        <span className="piece-label">{t.modeLabel}</span>
        <div className="chips">
          <button className={mode === 'type' ? 'chip active' : 'chip'} onClick={() => { setMode('type'); setActiveChoice(null) }}>{t.modeType}</button>
          <button className={mode === 'choice' ? 'chip active' : 'chip'} onClick={() => { setMode('choice'); setActiveChoice(null) }}>{t.modeChoice}</button>
        </div>
      </div>

      {activeChoice && (
        <div className="cw-choice-panel">
          <p className="cw-choice-de">{activeChoice.word.entry.clueDe}</p>
          {translation(activeChoice.word.entry, locale) && <p className="cw-choice-translation">{translation(activeChoice.word.entry, locale)}</p>}
          <div className="chips">
            {activeChoice.options.map(o => (
              <button key={o} className="chip" onClick={() => pickChoice(o)}>{o}</button>
            ))}
          </div>
        </div>
      )}

      <div className="cw-layout">
        <div className="cw-board">
          <div className="cw-grid-wrap">
            <input
              ref={hiddenInputRef}
              className="cw-hidden-input"
              value=""
              onChange={onHiddenChange}
              onKeyDown={onHiddenKeyDown}
              autoCapitalize="characters"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              inputMode="text"
              aria-hidden="true"
              tabIndex={-1}
            />
            <div
              className="cw-grid"
              style={{ gridTemplateColumns: `repeat(${puzzle.width}, 1fr)`, width: '100%', maxWidth: `${puzzle.width * 38}px` }}
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
                      className={[
                        'cw-cell',
                        isSelected ? 'selected' : isInActiveWord(r, c) ? 'active-word' : '',
                        wrong ? 'wrong' : '',
                        right ? 'right' : '',
                      ].filter(Boolean).join(' ')}
                      onClick={() => selectCell(r, c)}
                    >
                      {number !== undefined && <span className="cw-number">{number}</span>}
                      <span className="cw-letter">{val}</span>
                    </button>
                  )
                }),
              )}
            </div>
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
                <li key={w.entry.id} className={[activeWord?.entry.id === w.entry.id && dir === 'across' ? 'active' : '', isWordSolved(w) ? 'solved' : ''].filter(Boolean).join(' ')}>
                  <button onClick={() => selectWord(w)}>
                    <span className="cw-clue-number">{w.number}.</span>
                    <span className="cw-clue-de">{w.entry.clueDe}</span>
                    {translation(w.entry, locale) && <span className="cw-clue-translation">{translation(w.entry, locale)}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="cw-clue-group">
            <span className="piece-label">{t.downLabel}</span>
            <ul>
              {downClues.map(w => (
                <li key={w.entry.id} className={[activeWord?.entry.id === w.entry.id && dir === 'down' ? 'active' : '', isWordSolved(w) ? 'solved' : ''].filter(Boolean).join(' ')}>
                  <button onClick={() => selectWord(w)}>
                    <span className="cw-clue-number">{w.number}.</span>
                    <span className="cw-clue-de">{w.entry.clueDe}</span>
                    {translation(w.entry, locale) && <span className="cw-clue-translation">{translation(w.entry, locale)}</span>}
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
