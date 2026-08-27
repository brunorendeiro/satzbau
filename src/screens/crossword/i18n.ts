import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  acrossLabel: string
  downLabel: string
  checkButton: string
  revealButton: string
  newPuzzleButton: string
  solvedMessage: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Kreuzworträtsel',
    intro: 'Palavras cruzadas em alemão — clica numa célula, escreve a palavra que resolve a pista.',
    acrossLabel: 'Horizontais',
    downLabel: 'Verticais',
    checkButton: 'Verificar',
    revealButton: 'Revelar',
    newPuzzleButton: 'Novo puzzle',
    solvedMessage: 'Resolvido! 🎉',
  },
  en: {
    title: 'Kreuzworträtsel',
    intro: 'A German crossword — click a cell and type the word that answers the clue.',
    acrossLabel: 'Across',
    downLabel: 'Down',
    checkButton: 'Check',
    revealButton: 'Reveal',
    newPuzzleButton: 'New puzzle',
    solvedMessage: 'Solved! 🎉',
  },
  de: {
    title: 'Kreuzworträtsel',
    intro: 'Ein deutsches Kreuzworträtsel — klicke auf ein Feld und schreib das Lösungswort.',
    acrossLabel: 'Waagerecht',
    downLabel: 'Senkrecht',
    checkButton: 'Prüfen',
    revealButton: 'Aufdecken',
    newPuzzleButton: 'Neues Rätsel',
    solvedMessage: 'Gelöst! 🎉',
  },
}
