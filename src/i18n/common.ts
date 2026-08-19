export type Locale = 'pt' | 'en' | 'de'

export const locales: { id: Locale; label: string }[] = [
  { id: 'pt', label: 'PT' },
  { id: 'en', label: 'EN' },
  { id: 'de', label: 'DE' },
]

export function detectLocale(): Locale {
  const stored = window.localStorage.getItem('satzbau-locale')
  if (stored === 'pt' || stored === 'en' || stored === 'de') return stored
  const browser = navigator.language.slice(0, 2).toLowerCase()
  if (browser === 'de') return 'de'
  if (browser === 'pt') return 'pt'
  return 'en'
}

type CommonUiStrings = {
  themeLight: string
  themeDark: string
  navSentenceBuilder: string
  navCompoundWords: string
  footerTagline: string
  cookieBody: string
  cookieAccept: string
  cookieReject: string
}

export const commonUi: Record<Locale, CommonUiStrings> = {
  pt: {
    themeLight: 'Claro',
    themeDark: 'Escuro',
    navSentenceBuilder: 'Satzbau',
    navCompoundWords: 'Wortbau',
    footerTagline: 'Sem contas · tudo guardado no teu browser',
    cookieBody: 'Uso o Google Analytics para perceber quantas pessoas visitam este projeto. Aceitas cookies analíticos?',
    cookieAccept: 'Aceitar',
    cookieReject: 'Recusar',
  },
  en: {
    themeLight: 'Light',
    themeDark: 'Dark',
    navSentenceBuilder: 'Satzbau',
    navCompoundWords: 'Wortbau',
    footerTagline: 'No accounts · everything stays in your browser',
    cookieBody: 'I use Google Analytics to understand how many people visit this project. Do you accept analytics cookies?',
    cookieAccept: 'Accept',
    cookieReject: 'Reject',
  },
  de: {
    themeLight: 'Hell',
    themeDark: 'Dunkel',
    navSentenceBuilder: 'Satzbau',
    navCompoundWords: 'Wortbau',
    footerTagline: 'Keine Konten · alles bleibt im Browser',
    cookieBody: 'Ich verwende Google Analytics, um zu verstehen, wie viele Menschen dieses Projekt besuchen. Akzeptierst du Analyse-Cookies?',
    cookieAccept: 'Akzeptieren',
    cookieReject: 'Ablehnen',
  },
}
