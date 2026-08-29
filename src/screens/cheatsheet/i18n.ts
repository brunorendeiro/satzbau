import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  situationLabel: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Spickzettel',
    intro: 'As frases mais úteis para os primeiros tempos na Alemanha, sem teres de navegar por diálogos — só a frase, na hora em que precisas dela.',
    situationLabel: 'O que precisas de dizer?',
  },
  en: {
    title: 'Spickzettel',
    intro: "The most useful phrases for your first months in Germany, no dialogue to navigate — just the phrase, right when you need it.",
    situationLabel: 'What do you need to say?',
  },
  de: {
    title: 'Spickzettel',
    intro: 'Die nützlichsten Sätze für die ersten Monate in Deutschland, ohne durch Dialoge zu navigieren — einfach der Satz, genau wenn du ihn brauchst.',
    situationLabel: 'Was musst du sagen?',
  },
}
