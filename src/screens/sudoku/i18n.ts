import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  checkButton: string
  newPuzzleButton: string
  solvedMessage: (word: string) => string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Buchstabendoku',
    intro: 'Um sudoku normal, mas com 9 letras alemãs em vez de números — cada letra aparece uma vez por linha, coluna e caixa 3×3. Ao resolver, a primeira linha soletra uma palavra alemã escondida.',
    checkButton: 'Verificar',
    newPuzzleButton: 'Novo puzzle',
    solvedMessage: (word) => `Resolvido! A palavra escondida era ${word}. 🎉`,
  },
  en: {
    title: 'Buchstabendoku',
    intro: "A regular sudoku, but with 9 German letters instead of numbers — each letter appears once per row, column and 3×3 box. Solve it and the top row spells a hidden German word.",
    checkButton: 'Check',
    newPuzzleButton: 'New puzzle',
    solvedMessage: (word) => `Solved! The hidden word was ${word}. 🎉`,
  },
  de: {
    title: 'Buchstabendoku',
    intro: 'Ein normales Sudoku, aber mit 9 deutschen Buchstaben statt Zahlen — jeder Buchstabe erscheint einmal pro Zeile, Spalte und 3×3-Box. Wenn du fertig bist, ergibt die oberste Zeile ein verstecktes deutsches Wort.',
    checkButton: 'Prüfen',
    newPuzzleButton: 'Neues Rätsel',
    solvedMessage: (word) => `Gelöst! Das versteckte Wort war ${word}. 🎉`,
  },
}
