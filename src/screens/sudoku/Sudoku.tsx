import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { useOutletContext } from 'react-router-dom'
import { generateSudoku, type SudokuPuzzle } from './sudoku-engine'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './sudoku.css'

function emptyInput(puzzle: SudokuPuzzle): (string | null)[][] {
  return puzzle.givenLetters.map(row => [...row])
}

export default function Sudoku() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  const [puzzle, setPuzzle] = useState<SudokuPuzzle>(() => generateSudoku())
  const [input, setInput] = useState<(string | null)[][]>(() => emptyInput(puzzle))
  const [selected, setSelected] = useState<{ row: number; col: number } | null>(null)
  const [showErrors, setShowErrors] = useState(false)
  const [solved, setSolved] = useState(false)
  const cellRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  const letters = [...puzzle.word].sort()

  useEffect(() => {
    let complete = true
    let correct = true
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (!input[r][c]) complete = false
        else if (input[r][c] !== puzzle.solutionLetters[r][c]) correct = false
      }
    }
    if (complete && correct) setSolved(true)
  }, [input, puzzle])

  function newPuzzle() {
    const p = generateSudoku()
    setPuzzle(p)
    setInput(emptyInput(p))
    setSelected(null)
    setShowErrors(false)
    setSolved(false)
  }

  function isGiven(row: number, col: number): boolean {
    return puzzle.givenLetters[row][col] !== null
  }

  function setLetter(row: number, col: number, letter: string | null) {
    if (isGiven(row, col)) return
    setInput(prev => {
      const next = prev.map(r => [...r])
      next[row][col] = letter
      return next
    })
    setShowErrors(false)
  }

  function focusCell(row: number, col: number) {
    cellRefs.current.get(`${row},${col}`)?.focus()
  }

  function selectCell(row: number, col: number) {
    setSelected({ row, col })
    focusCell(row, col)
  }

  function onCellKeyDown(e: KeyboardEvent<HTMLButtonElement>, row: number, col: number) {
    const move = (dr: number, dc: number) => {
      const r = Math.min(8, Math.max(0, row + dr))
      const c = Math.min(8, Math.max(0, col + dc))
      setSelected({ row: r, col: c })
      focusCell(r, c)
    }
    if (e.key === 'ArrowRight') { e.preventDefault(); move(0, 1); return }
    if (e.key === 'ArrowLeft') { e.preventDefault(); move(0, -1); return }
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1, 0); return }
    if (e.key === 'ArrowUp') { e.preventDefault(); move(-1, 0); return }
    if (e.key === 'Backspace' || e.key === 'Delete') { e.preventDefault(); setLetter(row, col, null); return }
    const key = e.key.toUpperCase()
    if (letters.includes(key)) { e.preventDefault(); setLetter(row, col, key) }
  }

  return (
    <div className="screen-sudoku">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="su-grid">
        {input.map((rowArr, r) =>
          rowArr.map((letter, c) => {
            const isSelected = selected?.row === r && selected?.col === c
            const given = isGiven(r, c)
            const wrong = showErrors && !given && letter && letter !== puzzle.solutionLetters[r][c]
            const cls = [
              'su-cell',
              given ? 'given' : '',
              isSelected ? 'selected' : '',
              wrong ? 'wrong' : '',
              c % 3 === 0 ? 'box-left' : '',
              r % 3 === 0 ? 'box-top' : '',
            ].filter(Boolean).join(' ')
            return (
              <button
                key={`${r}-${c}`}
                ref={el => { if (el) cellRefs.current.set(`${r},${c}`, el) }}
                className={cls}
                onClick={() => selectCell(r, c)}
                onKeyDown={e => onCellKeyDown(e, r, c)}
                disabled={given}
              >
                {letter ?? ''}
              </button>
            )
          }),
        )}
      </div>

      <div className="su-palette">
        {letters.map(l => (
          <button
            key={l}
            className="su-palette-key"
            onClick={() => selected && setLetter(selected.row, selected.col, l)}
            disabled={!selected || isGiven(selected.row, selected.col)}
          >
            {l}
          </button>
        ))}
        <button
          className="su-palette-key su-palette-clear"
          onClick={() => selected && setLetter(selected.row, selected.col, null)}
          disabled={!selected || isGiven(selected.row, selected.col)}
        >
          ×
        </button>
      </div>

      <div className="su-actions">
        <button className="chip" onClick={() => setShowErrors(true)}>{t.checkButton}</button>
        <button className="chip" onClick={newPuzzle}>{t.newPuzzleButton}</button>
      </div>

      {solved && <p className="su-solved">{t.solvedMessage(puzzle.word)}</p>}
    </div>
  )
}
