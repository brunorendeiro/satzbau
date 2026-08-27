export type ClueEntry = { id: string; answer: string; clueDe: string; cluePt: string; clueEn: string }

/** Single-word answers only (crossword cells hold one letter each) — pulled
 * from across the app's own vocabulary so the clues stay familiar. Clues are
 * German questions first — this is a German-learning app, so the target
 * language stays primary even when the translation below adapts to locale. */
export const WORD_BANK: ClueEntry[] = [
  { id: 'rot', answer: 'ROT', clueDe: 'Welche Farbe hat Blut?', cluePt: 'Que cor tem o sangue?', clueEn: 'What color is blood?' },
  { id: 'blau', answer: 'BLAU', clueDe: 'Welche Farbe hat der Himmel?', cluePt: 'Que cor tem o céu?', clueEn: 'What color is the sky?' },
  { id: 'gelb', answer: 'GELB', clueDe: 'Welche Farbe hat die Sonne?', cluePt: 'Que cor tem o sol?', clueEn: 'What color is the sun?' },
  { id: 'hund', answer: 'HUND', clueDe: 'Welches Tier bellt?', cluePt: 'Que animal ladra?', clueEn: 'Which animal barks?' },
  { id: 'katze', answer: 'KATZE', clueDe: 'Welches Tier miaut?', cluePt: 'Que animal mia?', clueEn: 'Which animal meows?' },
  { id: 'nashorn', answer: 'NASHORN', clueDe: 'Welches Tier hat ein Horn auf der Nase?', cluePt: 'Que animal tem um chifre no nariz?', clueEn: 'Which animal has a horn on its nose?' },
  { id: 'eisbaer', answer: 'EISBAER', clueDe: 'Welcher Bär lebt im Eis?', cluePt: 'Que urso vive no gelo?', clueEn: 'Which bear lives in the ice?' },
  { id: 'schuh', answer: 'SCHUH', clueDe: 'Was trägt man am Fuß?', cluePt: 'O que se usa no pé?', clueEn: 'What do you wear on your foot?' },
  { id: 'hut', answer: 'HUT', clueDe: 'Was trägt man auf dem Kopf?', cluePt: 'O que se usa na cabeça?', clueEn: 'What do you wear on your head?' },
  { id: 'tisch', answer: 'TISCH', clueDe: 'An welchem Möbelstück isst man?', cluePt: 'Em que móvel se come?', clueEn: 'Which piece of furniture do you eat at?' },
  { id: 'stuhl', answer: 'STUHL', clueDe: 'Worauf sitzt man?', cluePt: 'Onde te sentas?', clueEn: 'What do you sit on?' },
  { id: 'buch', answer: 'BUCH', clueDe: 'Was liest man Seite für Seite?', cluePt: 'O que se lê página a página?', clueEn: 'What do you read page by page?' },
  { id: 'brot', answer: 'BROT', clueDe: 'Was isst man zum Frühstück?', cluePt: 'O que se come ao pequeno-almoço?', clueEn: 'What do you eat for breakfast?' },
  { id: 'wasser', answer: 'WASSER', clueDe: 'Was trinkt man, wenn man Durst hat?', cluePt: 'O que se bebe quando há sede?', clueEn: 'What do you drink when thirsty?' },
  { id: 'sonne', answer: 'SONNE', clueDe: 'Was scheint tagsüber?', cluePt: 'O que brilha de dia?', clueEn: 'What shines during the day?' },
  { id: 'mond', answer: 'MOND', clueDe: 'Was scheint nachts?', cluePt: 'O que brilha de noite?', clueEn: 'What shines at night?' },
  { id: 'regen', answer: 'REGEN', clueDe: 'Was fällt vom Himmel, wenn es bewölkt ist?', cluePt: 'O que cai do céu quando está nublado?', clueEn: 'What falls from a cloudy sky?' },
  { id: 'schnee', answer: 'SCHNEE', clueDe: 'Was ist weiß, kalt und fällt im Winter?', cluePt: 'O que é branco, frio e cai no inverno?', clueEn: 'What is white, cold, and falls in winter?' },
  { id: 'arzt', answer: 'ARZT', clueDe: 'Wer behandelt kranke Menschen?', cluePt: 'Quem trata pessoas doentes?', clueEn: 'Who treats sick people?' },
  { id: 'lehrer', answer: 'LEHRER', clueDe: 'Wer unterrichtet in einer Schule?', cluePt: 'Quem ensina numa escola?', clueEn: 'Who teaches at a school?' },
  { id: 'koch', answer: 'KOCH', clueDe: 'Wer kocht in einem Restaurant?', cluePt: 'Quem cozinha num restaurante?', clueEn: 'Who cooks at a restaurant?' },
  { id: 'auto', answer: 'AUTO', clueDe: 'Was hat vier Räder?', cluePt: 'O que tem quatro rodas?', clueEn: 'What has four wheels?' },
  { id: 'zug', answer: 'ZUG', clueDe: 'Was fährt auf Schienen?', cluePt: 'O que anda sobre carris?', clueEn: 'What runs on rails?' },
  { id: 'haus', answer: 'HAUS', clueDe: 'Wo wohnt man?', cluePt: 'Onde se mora?', clueEn: 'Where do you live?' },
  { id: 'garten', answer: 'GARTEN', clueDe: 'Wo gibt es Pflanzen und Gras?', cluePt: 'Onde há plantas e relva?', clueEn: 'Where are there plants and grass?' },
  { id: 'apfel', answer: 'APFEL', clueDe: 'Welche Frucht ist rot oder grün?', cluePt: 'Que fruta é vermelha ou verde?', clueEn: 'Which fruit is red or green?' },
  { id: 'milch', answer: 'MILCH', clueDe: 'Welches weiße Getränk kommt von der Kuh?', cluePt: 'Que bebida branca vem da vaca?', clueEn: 'Which white drink comes from a cow?' },
  { id: 'kaese', answer: 'KAESE', clueDe: 'Was wird aus Milch gemacht und hat manchmal Löcher?', cluePt: 'O que é feito de leite e às vezes tem furos?', clueEn: 'What is made from milk and sometimes has holes?' },
  { id: 'freund', answer: 'FREUND', clueDe: 'Wie nennt man jemanden, den man sehr mag?', cluePt: 'Como se chama alguém de quem se gosta muito?', clueEn: 'What do you call someone you like a lot?' },
  { id: 'schule', answer: 'SCHULE', clueDe: 'Wo lernen Kinder?', cluePt: 'Onde aprendem as crianças?', clueEn: 'Where do children learn?' },
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
