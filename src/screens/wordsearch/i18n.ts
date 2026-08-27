import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  foundLabel: (found: number, total: number) => string
  newPuzzleButton: string
  allFoundMessage: string
  questionsLabel: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Wortsuche',
    intro: 'Sopa de letras em alemão — lê a pergunta, encontra a resposta escondida na grelha (clica na primeira letra, depois na última).',
    foundLabel: (found, total) => `${found} de ${total} encontradas`,
    newPuzzleButton: 'Novo puzzle',
    allFoundMessage: 'Encontraste todas! 🎉',
    questionsLabel: 'Perguntas',
  },
  en: {
    title: 'Wortsuche',
    intro: 'A German word search — read the question, find the answer hidden in the grid (click the first letter, then the last).',
    foundLabel: (found, total) => `${found} of ${total} found`,
    newPuzzleButton: 'New puzzle',
    allFoundMessage: 'You found them all! 🎉',
    questionsLabel: 'Questions',
  },
  de: {
    title: 'Wortsuche',
    intro: 'Ein deutsches Wortsuchrätsel — lies die Frage und finde die Antwort im Buchstabengitter (klicke den ersten und dann den letzten Buchstaben).',
    foundLabel: (found, total) => `${found} von ${total} gefunden`,
    newPuzzleButton: 'Neues Rätsel',
    allFoundMessage: 'Alle gefunden! 🎉',
    questionsLabel: 'Fragen',
  },
}
