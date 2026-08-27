/** Real German words, exactly 9 letters long with 9 distinct characters —
 * required so each letter can stand in for one sudoku digit 1-9. */
export const SECRET_WORDS = ['KURZFILME', 'BUCHLADEN', 'SUBJEKTIV', 'WOCHENTAG', 'KINDERTAG']

export type SudokuPuzzle = {
  word: string
  solutionLetters: string[][]
  givenLetters: (string | null)[][]
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function isSafe(grid: number[][], row: number, col: number, val: number): boolean {
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === val) return false
    if (grid[i][col] === val) return false
  }
  const boxRow = Math.floor(row / 3) * 3
  const boxCol = Math.floor(col / 3) * 3
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (grid[boxRow + r][boxCol + c] === val) return false
    }
  }
  return true
}

function fillGrid(grid: number[][], pos = 0): boolean {
  if (pos === 81) return true
  const row = Math.floor(pos / 9)
  const col = pos % 9
  if (grid[row][col] !== 0) return fillGrid(grid, pos + 1)
  for (const val of shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
    if (isSafe(grid, row, col, val)) {
      grid[row][col] = val
      if (fillGrid(grid, pos + 1)) return true
      grid[row][col] = 0
    }
  }
  return false
}

function generateSolvedDigits(): number[][] {
  const grid: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0))
  fillGrid(grid)
  return grid
}

export function generateSudoku(givenCount = 38): SudokuPuzzle {
  const word = SECRET_WORDS[Math.floor(Math.random() * SECRET_WORDS.length)]
  const digits = generateSolvedDigits()

  // Relabel digits -> letters using the FIRST ROW's own digit order, so the
  // first row (once solved) always spells the secret word in reading order.
  const digitToLetter = new Map<number, string>()
  digits[0].forEach((digit, i) => digitToLetter.set(digit, word[i]))

  const solutionLetters: string[][] = digits.map(row => row.map(d => digitToLetter.get(d)!))

  const positions = shuffle(Array.from({ length: 81 }, (_, i) => i))
  const removeCount = 81 - givenCount
  const removed = new Set(positions.slice(0, removeCount))

  const givenLetters: (string | null)[][] = solutionLetters.map((row, r) =>
    row.map((letter, c) => (removed.has(r * 9 + c) ? null : letter)),
  )

  return { word, solutionLetters, givenLetters }
}
