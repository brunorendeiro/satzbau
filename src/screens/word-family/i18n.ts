import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Wortfamilie',
    intro: 'Cada palavra alemã pode ter uma família inteira — um prefixo ou sufixo pequeno multiplica-a em várias palavras novas. Aprende cinco destes "multiplicadores" e passas a adivinhar o significado de palavras que nunca viste.',
  },
  en: {
    title: 'Wortfamilie',
    intro: 'Every German word can have a whole family — a small prefix or suffix multiplies it into several new words. Learn five of these "multipliers" and you\'ll start guessing the meaning of words you\'ve never seen.',
  },
  de: {
    title: 'Wortfamilie',
    intro: 'Jedes deutsche Wort kann eine ganze Familie haben — ein kleines Präfix oder Suffix vervielfacht es zu mehreren neuen Wörtern. Lerne fünf dieser "Multiplikatoren" und du beginnst, die Bedeutung unbekannter Wörter zu erraten.',
  },
}
