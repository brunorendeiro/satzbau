import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  modeLabel: string
  modeType: string
  modeChoice: string
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
    intro: 'Palavras cruzadas em alemão — clica numa célula e escreve a palavra que resolve a pista, ou usa o modo fácil para escolher entre 3 respostas.',
    modeLabel: 'Modo',
    modeType: 'Escrever',
    modeChoice: 'Fácil (escolher)',
    acrossLabel: 'Horizontais',
    downLabel: 'Verticais',
    checkButton: 'Verificar',
    revealButton: 'Revelar',
    newPuzzleButton: 'Novo puzzle',
    solvedMessage: 'Resolvido! 🎉',
  },
  en: {
    title: 'Kreuzworträtsel',
    intro: 'A German crossword — click a cell and type the word that answers the clue, or use easy mode to pick from 3 answers.',
    modeLabel: 'Mode',
    modeType: 'Type',
    modeChoice: 'Easy (pick)',
    acrossLabel: 'Across',
    downLabel: 'Down',
    checkButton: 'Check',
    revealButton: 'Reveal',
    newPuzzleButton: 'New puzzle',
    solvedMessage: 'Solved! 🎉',
  },
  de: {
    title: 'Kreuzworträtsel',
    intro: 'Ein deutsches Kreuzworträtsel — klicke auf ein Feld und schreib das Lösungswort, oder wähl den einfachen Modus mit 3 Antwortmöglichkeiten.',
    modeLabel: 'Modus',
    modeType: 'Schreiben',
    modeChoice: 'Leicht (auswählen)',
    acrossLabel: 'Waagerecht',
    downLabel: 'Senkrecht',
    checkButton: 'Prüfen',
    revealButton: 'Aufdecken',
    newPuzzleButton: 'Neues Rätsel',
    solvedMessage: 'Gelöst! 🎉',
  },
}
