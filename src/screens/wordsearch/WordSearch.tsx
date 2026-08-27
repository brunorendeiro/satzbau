import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { generateWordSearch, type WordSearchPuzzle, type WSClueEntry } from './wordsearch-engine'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './wordsearch.css'

type Cell = { row: number; col: number }

const PALETTE_SIZE = 6

function questionText(entry: WSClueEntry, locale: Locale): string {
  return locale === 'en' ? entry.questionEn : entry.questionPt
}

export default function WordSearch() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  const [puzzle, setPuzzle] = useState<WordSearchPuzzle>(() => generateWordSearch())
  const [start, setStart] = useState<Cell | null>(null)
  const [found, setFound] = useState<Set<string>>(new Set())
  const [foundColor, setFoundColor] = useState<Map<string, number>>(new Map())
  const [wrongCells, setWrongCells] = useState<Cell[]>([])

  const allFound = found.size > 0 && found.size === puzzle.placements.length

  function newPuzzle() {
    setPuzzle(generateWordSearch())
    setStart(null)
    setFound(new Set())
    setFoundColor(new Map())
    setWrongCells([])
  }

  function cellClick(row: number, col: number) {
    if (!start) { setStart({ row, col }); return }
    if (start.row === row && start.col === col) { setStart(null); return }

    const dRow = Math.sign(row - start.row)
    const dCol = Math.sign(col - start.col)
    const lenRow = Math.abs(row - start.row)
    const lenCol = Math.abs(col - start.col)
    const straight = dRow === 0 || dCol === 0 || lenRow === lenCol
    if (!straight) { setStart({ row, col }); return }

    const length = Math.max(lenRow, lenCol) + 1
    const cells: Cell[] = Array.from({ length }, (_, i) => ({ row: start.row + dRow * i, col: start.col + dCol * i }))
    const word = cells.map(c => puzzle.grid[c.row][c.col]).join('')
    const reversed = word.split('').reverse().join('')
    const match = puzzle.placements.find(p => !found.has(p.entry.id) && (p.entry.answer === word || p.entry.answer === reversed))

    if (match) {
      const colorIdx = found.size % PALETTE_SIZE
      setFound(prev => new Set(prev).add(match.entry.id))
      setFoundColor(prev => {
        const next = new Map(prev)
        cells.forEach(c => next.set(`${c.row},${c.col}`, colorIdx))
        return next
      })
    } else {
      setWrongCells(cells)
      setTimeout(() => setWrongCells([]), 400)
    }
    setStart(null)
  }

  const foundEntryIds = useMemo(() => found, [found])

  return (
    <div className="screen-wordsearch">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="ws-layout">
        <div
          className="ws-grid"
          style={{ gridTemplateColumns: `repeat(${puzzle.size}, 1fr)`, maxWidth: `${puzzle.size * 34}px` }}
        >
          {puzzle.grid.map((rowArr, r) =>
            rowArr.map((letter, c) => {
              const key = `${r},${c}`
              const isStart = start?.row === r && start?.col === c
              const isWrong = wrongCells.some(cell => cell.row === r && cell.col === c)
              const colorIdx = foundColor.get(key)
              const cls = [
                'ws-cell',
                isStart ? 'active' : '',
                isWrong ? 'wrong' : '',
                colorIdx !== undefined ? `ws-found-${colorIdx}` : '',
              ].filter(Boolean).join(' ')
              return (
                <button key={key} className={cls} onClick={() => cellClick(r, c)}>
                  {letter}
                </button>
              )
            }),
          )}
        </div>

        <div className="ws-clues">
          <span className="piece-label">{t.foundLabel(found.size, puzzle.placements.length)}</span>
          <ul>
            {puzzle.placements.map(p => (
              <li key={p.entry.id} className={foundEntryIds.has(p.entry.id) ? 'found' : ''}>
                {questionText(p.entry, locale)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ws-actions">
        <button className="chip" onClick={newPuzzle}>{t.newPuzzleButton}</button>
      </div>

      {allFound && <p className="ws-solved">{t.allFoundMessage}</p>}
    </div>
  )
}
