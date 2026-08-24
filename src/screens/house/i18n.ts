import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  hint: string
  itemsLabel: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Zuhause',
    intro: 'A planta de uma casa vista de cima — clica numa divisão para entrares e veres o vocabulário do que costuma lá estar.',
    hint: 'Clica numa divisão da casa',
    itemsLabel: 'O que há aqui',
  },
  en: {
    title: 'Zuhause',
    intro: 'A house floor plan seen from above — click a room to step inside and see the vocabulary for what\'s usually found there.',
    hint: 'Click a room in the house',
    itemsLabel: "What's in here",
  },
  de: {
    title: 'Zuhause',
    intro: 'Ein Grundriss von oben — klicke auf einen Raum, um hineinzugehen und den Wortschatz für das zu sehen, was dort normalerweise steht.',
    hint: 'Klicke auf einen Raum im Haus',
    itemsLabel: 'Was es hier gibt',
  },
}
