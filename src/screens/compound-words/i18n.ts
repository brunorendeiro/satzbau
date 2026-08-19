import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  literalLabel: string
  meaningLabel: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Wortbau',
    intro: 'O alemão gosta de usar o mínimo de palavras possível — em vez de inventar uma nova, junta duas (ou mais) já existentes, como peças de Lego, e mistura os significados. Por isso há palavras compridas: cada pedaço continua a fazer sentido sozinho.',
    literalLabel: 'À letra',
    meaningLabel: 'Significado',
  },
  en: {
    title: 'Wortbau',
    intro: 'German prefers to invent as few new words as possible — instead, it snaps two (or more) existing words together, like Lego, and blends their meanings. That\'s why the words get long: each piece still means something on its own.',
    literalLabel: 'Literally',
    meaningLabel: 'Meaning',
  },
  de: {
    title: 'Wortbau',
    intro: 'Das Deutsche erfindet möglichst wenige neue Wörter — stattdessen werden zwei (oder mehr) bestehende Wörter wie Legosteine zusammengesetzt und ihre Bedeutungen verschmolzen. Deshalb entstehen lange Wörter: jedes Teil bleibt für sich verständlich.',
    literalLabel: 'Wörtlich',
    meaningLabel: 'Bedeutung',
  },
}
