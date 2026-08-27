import type { Locale } from '../../i18n/common'

export type GameId = 'quiz' | 'crossword' | 'wordsearch' | 'sudoku'

type UiStrings = {
  title: string
  intro: string
  gameLabels: Record<GameId, string>
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Spiele',
    intro: 'Escolhe um jogo — todos misturam alemão com um pouco de diversão.',
    gameLabels: {
      quiz: 'Quiz',
      crossword: 'Kreuzworträtsel',
      wordsearch: 'Wortsuche',
      sudoku: 'Buchstabendoku',
    },
  },
  en: {
    title: 'Spiele',
    intro: 'Pick a game — they all mix German practice with a bit of fun.',
    gameLabels: {
      quiz: 'Quiz',
      crossword: 'Kreuzworträtsel',
      wordsearch: 'Wortsuche',
      sudoku: 'Buchstabendoku',
    },
  },
  de: {
    title: 'Spiele',
    intro: 'Wähl ein Spiel — sie alle mischen Deutschübung mit etwas Spaß.',
    gameLabels: {
      quiz: 'Quiz',
      crossword: 'Kreuzworträtsel',
      wordsearch: 'Wortsuche',
      sudoku: 'Buchstabendoku',
    },
  },
}
