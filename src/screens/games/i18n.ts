import type { Locale } from '../../i18n/common'

export type GameId = 'quiz' | 'crossword' | 'wordsearch' | 'sudoku'

type UiStrings = {
  title: string
  intro: string
  beginnerHint: string
  beginnerLink: string
  gameLabels: Record<GameId, string>
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Spiele',
    intro: 'Escolhe um jogo — todos misturam alemão com um pouco de diversão.',
    beginnerHint: 'Ainda estás a começar? Aprende primeiro as frases essenciais e volta depois para praticar.',
    beginnerLink: 'Começar no A1',
    gameLabels: {
      quiz: 'Quiz',
      crossword: 'Palavras cruzadas',
      wordsearch: 'Sopa de letras',
      sudoku: 'Buchstabendoku',
    },
  },
  en: {
    title: 'Spiele',
    intro: 'Pick a game — they all mix German practice with a bit of fun.',
    beginnerHint: 'Just getting started? Learn the essential phrases first, then come back to practise.',
    beginnerLink: 'Start at A1',
    gameLabels: {
      quiz: 'Quiz',
      crossword: 'Crossword',
      wordsearch: 'Word search',
      sudoku: 'Buchstabendoku',
    },
  },
  de: {
    title: 'Spiele',
    intro: 'Wähl ein Spiel — sie alle mischen Deutschübung mit etwas Spaß.',
    beginnerHint: 'Fängst du gerade erst an? Lerne zuerst die wichtigsten Sätze und komm dann zum Üben zurück.',
    beginnerLink: 'Mit A1 beginnen',
    gameLabels: {
      quiz: 'Quiz',
      crossword: 'Kreuzworträtsel',
      wordsearch: 'Wortsuche',
      sudoku: 'Buchstabendoku',
    },
  },
}
