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
  seoTitle: string
  seoDescription: string
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
  navCheatSheet: string
  navGames: string
  footerTagline: string
  cookieBody: string
  cookieAccept: string
  cookieReject: string
}

export const commonUi: Record<Locale, CommonUiStrings> = {
  pt: {
    seoTitle: 'Satzbau — Aprende alemão com exercícios interativos',
    seoDescription: 'Aprende alemão com exercícios interativos de frases, TeKaMoLo, vocabulário, pronúncia, números, conversação e jogos em PT, EN e DE.',
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
    navCheatSheet: 'Spickzettel',
    navGames: 'Spiele',
    footerTagline: 'Aprende alemão ao teu ritmo',
    cookieBody: 'Uso o Google Analytics e o Google AdSense para perceber quantas pessoas visitam este projeto. Aceitas cookies de análise e publicidade?',
    cookieAccept: 'Aceitar',
    cookieReject: 'Recusar',
  },
  en: {
    seoTitle: 'Satzbau — Learn German with interactive exercises',
    seoDescription: 'Learn German with interactive exercises for sentences, TeKaMoLo, vocabulary, pronunciation, numbers, conversations and games in PT, EN and DE.',
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
    navCheatSheet: 'Spickzettel',
    navGames: 'Spiele',
    footerTagline: 'Learn German at your own pace',
    cookieBody: 'I use Google Analytics and Google AdSense to understand how many people visit this project. Do you accept analytics and advertising cookies?',
    cookieAccept: 'Accept',
    cookieReject: 'Reject',
  },
  de: {
    seoTitle: 'Satzbau — Deutsch lernen mit interaktiven Übungen',
    seoDescription: 'Lerne Deutsch mit interaktiven Übungen zu Satzbau, TeKaMoLo, Wortschatz, Aussprache, Zahlen, Gesprächen und Spielen auf PT, EN und DE.',
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
    navCheatSheet: 'Spickzettel',
    navGames: 'Spiele',
    footerTagline: 'Lerne Deutsch in deinem Tempo',
    cookieBody: 'Ich verwende Google Analytics und Google AdSense, um zu verstehen, wie viele Menschen dieses Projekt besuchen. Akzeptierst du Analyse- und Werbe-Cookies?',
    cookieAccept: 'Akzeptieren',
    cookieReject: 'Ablehnen',
  },
}
