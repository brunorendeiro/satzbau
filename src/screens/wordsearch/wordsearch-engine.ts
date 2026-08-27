export type WSClueEntry = { id: string; answer: string; questionPt: string; questionEn: string }

export const WORD_BANK: WSClueEntry[] = [
  { id: 'rot', answer: 'ROT', questionPt: 'Qual é a cor do sangue?', questionEn: 'What color is blood?' },
  { id: 'gruen', answer: 'GRUEN', questionPt: 'Qual é a cor da relva?', questionEn: 'What color is grass?' },
  { id: 'hund', answer: 'HUND', questionPt: 'Que animal ladra?', questionEn: 'Which animal barks?' },
  { id: 'katze', answer: 'KATZE', questionPt: 'Que animal mia?', questionEn: 'Which animal meows?' },
  { id: 'vogel', answer: 'VOGEL', questionPt: 'Que animal voa e canta?', questionEn: 'Which animal flies and sings?' },
  { id: 'apfel', answer: 'APFEL', questionPt: 'Que fruta é vermelha ou verde?', questionEn: 'Which fruit is red or green?' },
  { id: 'brot', answer: 'BROT', questionPt: 'O que se come ao pequeno-almoço?', questionEn: 'What do you eat for breakfast?' },
  { id: 'wasser', answer: 'WASSER', questionPt: 'O que se bebe quando há sede?', questionEn: 'What do you drink when thirsty?' },
  { id: 'sonne', answer: 'SONNE', questionPt: 'O que brilha de dia?', questionEn: 'What shines during the day?' },
  { id: 'mond', answer: 'MOND', questionPt: 'O que brilha de noite?', questionEn: 'What shines at night?' },
  { id: 'haus', answer: 'HAUS', questionPt: 'Onde é que se mora?', questionEn: 'Where do you live?' },
  { id: 'schule', answer: 'SCHULE', questionPt: 'Onde é que as crianças aprendem?', questionEn: 'Where do children learn?' },
  { id: 'lehrer', answer: 'LEHRER', questionPt: 'Quem ensina numa escola?', questionEn: 'Who teaches at a school?' },
  { id: 'arzt', answer: 'ARZT', questionPt: 'Quem trata os doentes?', questionEn: 'Who treats the sick?' },
  { id: 'buch', answer: 'BUCH', questionPt: 'O que se lê página a página?', questionEn: 'What do you read page by page?' },
  { id: 'auto', answer: 'AUTO', questionPt: 'O que tem quatro rodas?', questionEn: 'What has four wheels?' },
  { id: 'zug', answer: 'ZUG', questionPt: 'O que anda sobre carris?', questionEn: 'What runs on rails?' },
  { id: 'winter', answer: 'WINTER', questionPt: 'Em que estação neva?', questionEn: 'Which season does it snow in?' },
  { id: 'sommer', answer: 'SOMMER', questionPt: 'Em que estação faz mais calor?', questionEn: 'Which season is hottest?' },
  { id: 'freund', answer: 'FREUND', questionPt: 'Como se chama alguém de quem gostas muito?', questionEn: 'What do you call someone you like a lot?' },
  { id: 'kaffee', answer: 'KAFFEE', questionPt: 'Que bebida quente tem cafeína?', questionEn: 'Which hot drink has caffeine?' },
  { id: 'milch', answer: 'MILCH', questionPt: 'Que bebida branca vem da vaca?', questionEn: 'Which white drink comes from a cow?' },
]

export type WSPlacement = { entry: WSClueEntry; row: number; col: number; dRow: number; dCol: number }

export type WordSearchPuzzle = {
  size: number
  grid: string[][]
  placements: WSPlacement[]
}

const DIRECTIONS: { dRow: number; dCol: number }[] = [
  { dRow: 0, dCol: 1 }, { dRow: 0, dCol: -1 },
  { dRow: 1, dCol: 0 }, { dRow: -1, dCol: 0 },
  { dRow: 1, dCol: 1 }, { dRow: -1, dCol: 1 },
  { dRow: 1, dCol: -1 }, { dRow: -1, dCol: -1 },
]

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function generateWordSearch(size = 12, targetCount = 10): WordSearchPuzzle {
  const grid: (string | null)[][] = Array.from({ length: size }, () => Array(size).fill(null))
  const pool = shuffle(WORD_BANK).sort((a, b) => b.answer.length - a.answer.length).slice(0, targetCount + 8)
  const placements: WSPlacement[] = []

  for (const entry of pool) {
    if (placements.length >= targetCount) break
    const dirs = shuffle(DIRECTIONS)
    let placed = false
    for (const dir of dirs) {
      if (placed) break
      const starts = shuffle(Array.from({ length: size * size }, (_, i) => ({ row: Math.floor(i / size), col: i % size })))
      for (const start of starts) {
        const endRow = start.row + dir.dRow * (entry.answer.length - 1)
        const endCol = start.col + dir.dCol * (entry.answer.length - 1)
        if (endRow < 0 || endRow >= size || endCol < 0 || endCol >= size) continue
        let ok = true
        for (let i = 0; i < entry.answer.length; i++) {
          const r = start.row + dir.dRow * i
          const c = start.col + dir.dCol * i
          const existing = grid[r][c]
          if (existing && existing !== entry.answer[i]) { ok = false; break }
        }
        if (!ok) continue
        for (let i = 0; i < entry.answer.length; i++) {
          const r = start.row + dir.dRow * i
          const c = start.col + dir.dCol * i
          grid[r][c] = entry.answer[i]
        }
        placements.push({ entry, row: start.row, col: start.col, dRow: dir.dRow, dCol: dir.dCol })
        placed = true
        break
      }
    }
  }

  const filled: string[][] = grid.map(row => row.map(cell => cell ?? ALPHABET[Math.floor(Math.random() * ALPHABET.length)]))

  return { size, grid: filled, placements }
}
