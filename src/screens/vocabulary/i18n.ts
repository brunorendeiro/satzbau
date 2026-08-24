import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  sectionColors: string
  sectionGreetings: string
  sectionWeekdays: string
  sectionMonths: string
  sectionSeasons: string
  genderHint: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Wortschatz',
    intro: 'O vocabulário do dia a dia — as palavras que aparecem tantas vezes que vale a pena tê-las todas juntas numa só página.',
    sectionColors: 'Cores',
    sectionGreetings: 'Cumprimentos',
    sectionWeekdays: 'Dias da semana',
    sectionMonths: 'Meses',
    sectionSeasons: 'Estações',
    genderHint: 'Dias, meses e estações são quase todos "der" — exceção: "die Nacht". (ver Wortfamilie)',
  },
  en: {
    title: 'Wortschatz',
    intro: 'Everyday vocabulary — the words that come up so often they deserve one page all to themselves.',
    sectionColors: 'Colors',
    sectionGreetings: 'Greetings',
    sectionWeekdays: 'Days of the week',
    sectionMonths: 'Months',
    sectionSeasons: 'Seasons',
    genderHint: 'Days, months and seasons are almost all "der" — exception: "die Nacht". (see Wortfamilie)',
  },
  de: {
    title: 'Wortschatz',
    intro: 'Der Alltagswortschatz — die Wörter, die so oft vorkommen, dass sie eine eigene Seite verdienen.',
    sectionColors: 'Farben',
    sectionGreetings: 'Begrüßungen',
    sectionWeekdays: 'Wochentage',
    sectionMonths: 'Monate',
    sectionSeasons: 'Jahreszeiten',
    genderHint: 'Tage, Monate und Jahreszeiten sind fast alle "der" — Ausnahme: "die Nacht". (siehe Wortfamilie)',
  },
}
