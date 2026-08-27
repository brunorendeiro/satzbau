export type ClueEntry = { id: string; answer: string; cluePt: string; clueEn: string }

/** Single-word answers only (crossword cells hold one letter each) — pulled
 * from across the app's own vocabulary so the clues stay familiar. */
export const WORD_BANK: ClueEntry[] = [
  { id: 'rot', answer: 'ROT', cluePt: 'Cor do sangue', clueEn: 'Color of blood' },
  { id: 'blau', answer: 'BLAU', cluePt: 'Cor do céu', clueEn: 'Color of the sky' },
  { id: 'gelb', answer: 'GELB', cluePt: 'Cor do sol', clueEn: 'Color of the sun' },
  { id: 'hund', answer: 'HUND', cluePt: 'Animal que ladra', clueEn: 'Animal that barks' },
  { id: 'katze', answer: 'KATZE', cluePt: 'Animal que mia', clueEn: 'Animal that meows' },
  { id: 'nashorn', answer: 'NASHORN', cluePt: 'Literalmente "chifre de nariz"', clueEn: 'Literally "nose-horn"' },
  { id: 'eisbaer', answer: 'EISBAER', cluePt: 'Literalmente "urso de gelo"', clueEn: 'Literally "ice-bear"' },
  { id: 'schuh', answer: 'SCHUH', cluePt: 'Usa-se no pé', clueEn: 'Worn on the foot' },
  { id: 'hut', answer: 'HUT', cluePt: 'Usa-se na cabeça', clueEn: 'Worn on the head' },
  { id: 'tisch', answer: 'TISCH', cluePt: 'Móvel onde se come', clueEn: 'Furniture you eat at' },
  { id: 'stuhl', answer: 'STUHL', cluePt: 'Onde te sentas', clueEn: 'What you sit on' },
  { id: 'buch', answer: 'BUCH', cluePt: 'Lê-se página a página', clueEn: 'Read page by page' },
  { id: 'brot', answer: 'BROT', cluePt: 'Come-se ao pequeno-almoço', clueEn: 'Eaten at breakfast' },
  { id: 'wasser', answer: 'WASSER', cluePt: 'Bebe-se quando há sede', clueEn: 'Drunk when thirsty' },
  { id: 'sonne', answer: 'SONNE', cluePt: 'Brilha de dia', clueEn: 'Shines during the day' },
  { id: 'mond', answer: 'MOND', cluePt: 'Brilha de noite', clueEn: 'Shines at night' },
  { id: 'regen', answer: 'REGEN', cluePt: 'Cai do céu quando está nublado', clueEn: 'Falls from a cloudy sky' },
  { id: 'schnee', answer: 'SCHNEE', cluePt: 'Branco e frio, cai no inverno', clueEn: 'White and cold, falls in winter' },
  { id: 'arzt', answer: 'ARZT', cluePt: 'Trata doentes', clueEn: 'Treats the sick' },
  { id: 'lehrer', answer: 'LEHRER', cluePt: 'Ensina numa escola', clueEn: 'Teaches at a school' },
  { id: 'koch', answer: 'KOCH', cluePt: 'Cozinha num restaurante', clueEn: 'Cooks at a restaurant' },
  { id: 'auto', answer: 'AUTO', cluePt: 'Tem quatro rodas', clueEn: 'Has four wheels' },
  { id: 'zug', answer: 'ZUG', cluePt: 'Anda sobre carris', clueEn: 'Runs on rails' },
  { id: 'haus', answer: 'HAUS', cluePt: 'Onde se mora', clueEn: 'Where you live' },
  { id: 'garten', answer: 'GARTEN', cluePt: 'Tem plantas e relva', clueEn: 'Has plants and grass' },
  { id: 'apfel', answer: 'APFEL', cluePt: 'Fruta vermelha ou verde', clueEn: 'Red or green fruit' },
  { id: 'milch', answer: 'MILCH', cluePt: 'Bebida branca da vaca', clueEn: "White drink from a cow" },
  { id: 'kaese', answer: 'KAESE', cluePt: 'Feito de leite, tem furos às vezes', clueEn: 'Made from milk, sometimes has holes' },
  { id: 'freund', answer: 'FREUND', cluePt: 'Pessoa de quem gostas muito', clueEn: 'Someone you like a lot' },
  { id: 'schule', answer: 'SCHULE', cluePt: 'Onde as crianças aprendem', clueEn: 'Where children learn' },
]

export type PlacedWord = { entry: ClueEntry; row: number; col: number; dir: 'across' | 'down'; number: number }

export type CrosswordPuzzle = {
  width: number
  height: number
  cells: (string | null)[][]
  placed: PlacedWord[]
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type RawPlacement = { entry: ClueEntry; row: number; col: number; dir: 'across' | 'down' }

function canPlace(letters: Map<string, string>, entry: ClueEntry, row: number, col: number, dir: 'across' | 'down'): boolean {
  for (let i = 0; i < entry.answer.length; i++) {
    const r = dir === 'down' ? row + i : row
    const c = dir === 'across' ? col + i : col
    const existing = letters.get(`${r},${c}`)
    if (existing && existing !== entry.answer[i]) return false
  }
  return true
}

function place(letters: Map<string, string>, entry: ClueEntry, row: number, col: number, dir: 'across' | 'down') {
  for (let i = 0; i < entry.answer.length; i++) {
    const r = dir === 'down' ? row + i : row
    const c = dir === 'across' ? col + i : col
    letters.set(`${r},${c}`, entry.answer[i])
  }
}

export function generateCrossword(targetCount = 12): CrosswordPuzzle {
  const pool = shuffle(WORD_BANK).sort((a, b) => b.answer.length - a.answer.length).slice(0, targetCount + 6)
  const letters = new Map<string, string>()
  const placements: RawPlacement[] = []

  const first = pool[0]
  place(letters, first, 0, 0, 'across')
  placements.push({ entry: first, row: 0, col: 0, dir: 'across' })

  const remaining = shuffle(pool.slice(1))
  let attempts = [...remaining]

  for (let pass = 0; pass < 2 && placements.length < targetCount; pass++) {
    const stillUnplaced: ClueEntry[] = []
    for (const entry of attempts) {
      if (placements.length >= targetCount) {
        stillUnplaced.push(entry)
        continue
      }
      let placed = false
      const shuffledExisting = shuffle(placements)
      for (const existing of shuffledExisting) {
        if (placed) break
        for (let i = 0; i < entry.answer.length && !placed; i++) {
          for (let j = 0; j < existing.entry.answer.length && !placed; j++) {
            if (entry.answer[i] !== existing.entry.answer[j]) continue
            const dir: 'across' | 'down' = existing.dir === 'across' ? 'down' : 'across'
            const crossRow = existing.dir === 'across' ? existing.row : existing.row + j
            const crossCol = existing.dir === 'across' ? existing.col + j : existing.col
            const row = dir === 'down' ? crossRow - i : crossRow
            const col = dir === 'across' ? crossCol - i : crossCol
            if (canPlace(letters, entry, row, col, dir)) {
              place(letters, entry, row, col, dir)
              placements.push({ entry, row, col, dir })
              placed = true
            }
          }
        }
      }
      if (!placed) stillUnplaced.push(entry)
    }
    attempts = stillUnplaced
  }

  const rows = placements.flatMap(p => Array.from({ length: p.dir === 'down' ? p.entry.answer.length : 1 }, (_, i) => p.row + i))
  const cols = placements.flatMap(p => Array.from({ length: p.dir === 'across' ? p.entry.answer.length : 1 }, (_, i) => p.col + i))
  const minRow = Math.min(...rows)
  const maxRow = Math.max(...rows)
  const minCol = Math.min(...cols)
  const maxCol = Math.max(...cols)
  const height = maxRow - minRow + 1
  const width = maxCol - minCol + 1

  const cells: (string | null)[][] = Array.from({ length: height }, () => Array(width).fill(null))
  for (const [key, letter] of letters) {
    const [r, c] = key.split(',').map(Number)
    cells[r - minRow][c - minCol] = letter
  }

  const numbered: RawPlacement[] = placements
    .map(p => ({ ...p, row: p.row - minRow, col: p.col - minCol }))
    .sort((a, b) => (a.row - b.row) || (a.col - b.col))

  const numberAt = new Map<string, number>()
  let nextNumber = 1
  for (const p of numbered) {
    const key = `${p.row},${p.col}`
    if (!numberAt.has(key)) numberAt.set(key, nextNumber++)
  }

  return {
    width,
    height,
    cells,
    placed: numbered.map(p => ({ ...p, number: numberAt.get(`${p.row},${p.col}`)! })),
  }
}
