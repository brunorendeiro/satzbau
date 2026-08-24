import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  sectionGenderLabel: string
  genderIntro: string
  sectionGenderMeaningLabel: string
  genderMeaningIntro: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Wortfamilie',
    intro: 'Cada palavra alemã pode ter uma família inteira — um prefixo ou sufixo pequeno multiplica-a em várias palavras novas. Aprende estes "multiplicadores" e passas a adivinhar o significado de palavras que nunca viste.',
    sectionGenderLabel: 'Bónus: adivinha o género pela terminação',
    genderIntro: 'Isto não cria palavras novas — mas várias terminações (muitas vêm do latim) preveem o género quase sempre, sem teres de decorar palavra a palavra. Repara que nem todas apontam para "das": cada terminação tem o seu próprio género fixo.',
    sectionGenderMeaningLabel: 'Bónus: adivinha o género pelo significado',
    genderMeaningIntro: 'Além das terminações, certas categorias de palavras têm quase sempre o mesmo género, com poucas exceções memoráveis.',
  },
  en: {
    title: 'Wortfamilie',
    intro: 'Every German word can have a whole family — a small prefix or suffix multiplies it into several new words. Learn these "multipliers" and you\'ll start guessing the meaning of words you\'ve never seen.',
    sectionGenderLabel: 'Bonus: guess the gender from the ending',
    genderIntro: 'This doesn\'t create new words — but several endings (many from Latin) predict gender almost every time, no memorizing word by word. Notice they don\'t all point to "das": each ending has its own fixed gender.',
    sectionGenderMeaningLabel: 'Bonus: guess the gender from the meaning',
    genderMeaningIntro: 'Beyond endings, certain categories of words almost always share the same gender, with a few memorable exceptions.',
  },
  de: {
    title: 'Wortfamilie',
    intro: 'Jedes deutsche Wort kann eine ganze Familie haben — ein kleines Präfix oder Suffix vervielfacht es zu mehreren neuen Wörtern. Lerne diese "Multiplikatoren" und du beginnst, die Bedeutung unbekannter Wörter zu erraten.',
    sectionGenderLabel: 'Bonus: das Geschlecht an der Endung erraten',
    genderIntro: 'Das erzeugt keine neuen Wörter — aber mehrere Endungen (viele aus dem Lateinischen) sagen das Geschlecht fast immer voraus, ohne Wort für Wort auswendig zu lernen. Sie zeigen nicht alle auf "das": jede Endung hat ihr eigenes festes Geschlecht.',
    sectionGenderMeaningLabel: 'Bonus: das Geschlecht an der Bedeutung erraten',
    genderMeaningIntro: 'Neben den Endungen haben bestimmte Wortkategorien fast immer dasselbe Geschlecht, mit ein paar einprägsamen Ausnahmen.',
  },
}
