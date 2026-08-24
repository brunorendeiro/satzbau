import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  sectionNumbers: string
  numbersHint: string
  sectionGeneral: string
  sectionFire: string
  sectionPolice: string
  sectionMedical: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Notfall',
    intro: 'O vocabulário e os números para os momentos em que não há tempo para procurar palavras — o que dizer aos bombeiros, à polícia ou a um médico.',
    sectionNumbers: 'Números de emergência',
    numbersHint: '112 funciona em qualquer país da UE — inclui a Alemanha e a Áustria. Na Suíça, os números diretos costumam ser mais rápidos.',
    sectionGeneral: 'Geral',
    sectionFire: 'Bombeiros',
    sectionPolice: 'Polícia',
    sectionMedical: 'Médico e ambulância',
  },
  en: {
    title: 'Notfall',
    intro: "Vocabulary and numbers for the moments when there's no time to search for words — what to say to firefighters, police, or a doctor.",
    sectionNumbers: 'Emergency numbers',
    numbersHint: '112 works in any EU country — including Germany and Austria. In Switzerland, the direct numbers tend to connect faster.',
    sectionGeneral: 'General',
    sectionFire: 'Fire brigade',
    sectionPolice: 'Police',
    sectionMedical: 'Doctor & ambulance',
  },
  de: {
    title: 'Notfall',
    intro: 'Wortschatz und Nummern für die Momente, in denen keine Zeit bleibt, nach Wörtern zu suchen — was man der Feuerwehr, der Polizei oder einem Arzt sagt.',
    sectionNumbers: 'Notrufnummern',
    numbersHint: '112 funktioniert in jedem EU-Land — auch in Deutschland und Österreich. In der Schweiz sind die direkten Nummern oft schneller.',
    sectionGeneral: 'Allgemein',
    sectionFire: 'Feuerwehr',
    sectionPolice: 'Polizei',
    sectionMedical: 'Arzt & Krankenwagen',
  },
}
