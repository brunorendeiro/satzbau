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
  navNumbers: string
  navAlphabet: string
  navWordFamily: string
  navVocabulary: string
  navHouse: string
  navEmergency: string
  navConversations: string
  navEveryday: string
  navCheatSheet: string
  navGames: string
  beginnerTitle: string
  beginnerBody: string
  beginnerAction: string
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
    navNumbers: 'Zahlen',
    navAlphabet: 'Aussprache',
    navWordFamily: 'Wortfamilie',
    navVocabulary: 'Wortschatz',
    navHouse: 'Zuhause',
    navEmergency: 'Notfall',
    navConversations: 'Gespräche',
    navEveryday: 'Alltag · A1',
    navCheatSheet: 'Spickzettel',
    navGames: 'Spiele',
    beginnerTitle: 'Novo no alemão?',
    beginnerBody: 'Começa com frases essenciais para viver na Suíça.',
    beginnerAction: 'Começar A1',
    footerTagline: 'Aprende alemão ao teu ritmo',
    cookieBody: 'Uso o Google Analytics e o Google AdSense para perceber quantas pessoas visitam este projeto. Aceitas cookies de análise e publicidade?',
    cookieAccept: 'Aceitar',
    cookieReject: 'Recusar',
  },
  en: {
    themeLight: 'Light',
    themeDark: 'Dark',
    navSentenceBuilder: 'Satzbau',
    navCompoundWords: 'Wortbau',
    navNumbers: 'Zahlen',
    navAlphabet: 'Aussprache',
    navWordFamily: 'Wortfamilie',
    navVocabulary: 'Wortschatz',
    navHouse: 'Zuhause',
    navEmergency: 'Notfall',
    navConversations: 'Gespräche',
    navEveryday: 'Alltag · A1',
    navCheatSheet: 'Spickzettel',
    navGames: 'Spiele',
    beginnerTitle: 'New to German?',
    beginnerBody: 'Start with essential phrases for everyday life in Switzerland.',
    beginnerAction: 'Start A1',
    footerTagline: 'Learn German at your own pace',
    cookieBody: 'I use Google Analytics and Google AdSense to understand how many people visit this project. Do you accept analytics and advertising cookies?',
    cookieAccept: 'Accept',
    cookieReject: 'Reject',
  },
  de: {
    themeLight: 'Hell',
    themeDark: 'Dunkel',
    navSentenceBuilder: 'Satzbau',
    navCompoundWords: 'Wortbau',
    navNumbers: 'Zahlen',
    navAlphabet: 'Aussprache',
    navWordFamily: 'Wortfamilie',
    navVocabulary: 'Wortschatz',
    navHouse: 'Zuhause',
    navEmergency: 'Notfall',
    navConversations: 'Gespräche',
    navEveryday: 'Alltag · A1',
    navCheatSheet: 'Spickzettel',
    navGames: 'Spiele',
    beginnerTitle: 'Neu in Deutsch?',
    beginnerBody: 'Beginne mit wichtigen Sätzen für den Alltag in der Schweiz.',
    beginnerAction: 'A1 starten',
    footerTagline: 'Lerne Deutsch in deinem Tempo',
    cookieBody: 'Ich verwende Google Analytics und Google AdSense, um zu verstehen, wie viele Menschen dieses Projekt besuchen. Akzeptierst du Analyse- und Werbe-Cookies?',
    cookieAccept: 'Akzeptieren',
    cookieReject: 'Ablehnen',
  },
}
