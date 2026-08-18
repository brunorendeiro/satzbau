import type { Form } from './data/grammar'

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

type UiStrings = {
  brandTagline: string
  intro: string
  wer: string
  aktion: string
  modal: string
  wasWo: string
  forms: Record<Form, string>
  formExplain: Record<Form, string>
  regularLabel: string
  irregularLabel: string
  regularNote: string
  irregularNote: string
  answersLabel: string
  answerLabel: string
  yesLabel: string
  noLabel: string
  yesNoModeLabel: string
  werModeLabel: string
  whatModeLabel: string
  whereToModeLabel: string
  whereFromModeLabel: string
  werExplain: string
  whatExplain: string
  whereToExplain: string
  whereFromExplain: string
  restart: string
  themeLight: string
  themeDark: string
  footerTagline: string
  cookieBody: string
  cookieAccept: string
  cookieReject: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    brandTagline: 'A máquina de frases em alemão',
    intro: 'Escolhe as peças e vê a mesma frase mudar de forma — afirmativa, pergunta, negativa ou com dois verbos — segundo as regras de ordem das palavras do alemão.',
    wer: 'Wer · Quem',
    aktion: 'Aktion · Ação',
    modal: 'Modal · Querer, precisar, gostaria',
    wasWo: 'Was/Wo · O quê / Onde',
    forms: {
      affirmative: 'Afirmativa',
      question: 'Pergunta',
      negative: 'Negativa',
      twoVerbs: 'Dois verbos',
    },
    formExplain: {
      affirmative: 'O verbo fica sempre na 2ª posição: Sujeito + verbo + resto da frase.',
      question: 'Numa pergunta de sim/não, o verbo conjugado passa para o início: Verbo + sujeito + resto?',
      negative: '"kein" nega um substantivo sem artigo próprio (kein/keine/keinen consoante o género); "nicht" nega um lugar ou o verbo inteiro.',
      twoVerbs: 'Com um verbo modal, este fica na 2ª posição conjugado e o verbo principal vai para o infinitivo, no fim da frase.',
    },
    regularLabel: 'Regular',
    irregularLabel: 'Irregular',
    regularNote: 'Verbo regular — usa sempre as terminações -e, -st, -t, -en, -t, -en, sem mudar a vogal do radical.',
    irregularNote: 'Verbo irregular — a vogal do radical muda nas formas "du" e "er/sie", as terminações mantêm-se iguais.',
    answersLabel: 'Respostas possíveis',
    answerLabel: 'Resposta',
    yesLabel: 'Sim',
    noLabel: 'Não',
    yesNoModeLabel: 'Sim/Não',
    werModeLabel: 'Quem',
    whatModeLabel: 'O quê',
    whereToModeLabel: 'Para onde',
    whereFromModeLabel: 'De onde',
    werExplain: '"Wer" (quem) substitui o sujeito. O verbo continua na 2ª posição, mas agora quem responde é que escolhe o sujeito.',
    whatExplain: '"Was" (o quê) substitui o objeto — pergunta-se pelo que falta, por isso ele desaparece da frase.',
    whereToExplain: '"Wohin" (para onde) substitui o destino — usa-se "wohin" e não "wo" porque o verbo implica movimento em direção a um sítio.',
    whereFromExplain: '"Woher" (de onde) substitui a origem — usa-se "woher" e não "wo" porque o verbo implica movimento a partir de um sítio.',
    restart: 'Reiniciar',
    themeLight: 'Claro',
    themeDark: 'Escuro',
    footerTagline: 'Sem contas · tudo guardado no teu browser',
    cookieBody: 'Uso o Google Analytics para perceber quantas pessoas visitam este projeto. Aceitas cookies analíticos?',
    cookieAccept: 'Aceitar',
    cookieReject: 'Recusar',
  },
  en: {
    brandTagline: 'The German sentence machine',
    intro: 'Pick the pieces and watch the same sentence change shape — affirmative, question, negative or two-verb — following German word order rules.',
    wer: 'Wer · Who',
    aktion: 'Aktion · Action',
    modal: 'Modal · Want, need, would like',
    wasWo: 'Was/Wo · What / Where',
    forms: {
      affirmative: 'Affirmative',
      question: 'Question',
      negative: 'Negative',
      twoVerbs: 'Two verbs',
    },
    formExplain: {
      affirmative: 'The verb always sits in 2nd position: Subject + verb + rest of the sentence.',
      question: 'In a yes/no question, the conjugated verb moves to the front: Verb + subject + rest?',
      negative: '"kein" negates a noun with no article of its own (kein/keine/keinen depending on gender); "nicht" negates a place or the whole verb.',
      twoVerbs: 'With a modal verb, it takes 2nd position conjugated, and the main verb moves to the infinitive at the very end.',
    },
    regularLabel: 'Regular',
    irregularLabel: 'Irregular',
    regularNote: 'Regular verb — always uses the endings -e, -st, -t, -en, -t, -en, with no stem vowel change.',
    irregularNote: 'Irregular verb — the stem vowel changes in the "du" and "er/sie" forms, endings stay the same.',
    answersLabel: 'Possible answers',
    answerLabel: 'Answer',
    yesLabel: 'Yes',
    noLabel: 'No',
    yesNoModeLabel: 'Yes/No',
    werModeLabel: 'Who',
    whatModeLabel: 'What',
    whereToModeLabel: 'Where to',
    whereFromModeLabel: 'Where from',
    werExplain: '"Wer" (who) replaces the subject. The verb still sits in 2nd position, but now whoever answers picks the subject.',
    whatExplain: '"Was" (what) replaces the object — you\'re asking for the missing piece, so it drops out of the sentence.',
    whereToExplain: '"Wohin" (where to) replaces the destination — "wohin", not "wo", because the verb implies moving toward a place.',
    whereFromExplain: '"Woher" (where from) replaces the origin — "woher", not "wo", because the verb implies moving away from a place.',
    restart: 'Restart',
    themeLight: 'Light',
    themeDark: 'Dark',
    footerTagline: 'No accounts · everything stays in your browser',
    cookieBody: 'I use Google Analytics to understand how many people visit this project. Do you accept analytics cookies?',
    cookieAccept: 'Accept',
    cookieReject: 'Reject',
  },
  de: {
    brandTagline: 'Die deutsche Satzmaschine',
    intro: 'Wähle die Bausteine und beobachte, wie sich derselbe Satz verändert — Aussage, Frage, Verneinung oder mit zwei Verben —, je nach deutscher Wortstellung.',
    wer: 'Wer',
    aktion: 'Aktion',
    modal: 'Modal · wollen, müssen, möchten',
    wasWo: 'Was/Wo',
    forms: {
      affirmative: 'Aussage',
      question: 'Frage',
      negative: 'Verneinung',
      twoVerbs: 'Zwei Verben',
    },
    formExplain: {
      affirmative: 'Das Verb steht immer an Position 2: Subjekt + Verb + Rest des Satzes.',
      question: 'Bei einer Ja/Nein-Frage rückt das konjugierte Verb an den Anfang: Verb + Subjekt + Rest?',
      negative: '"kein" verneint ein Nomen ohne eigenen Artikel (kein/keine/keinen je nach Geschlecht); "nicht" verneint einen Ort oder das ganze Verb.',
      twoVerbs: 'Mit einem Modalverb steht dieses konjugiert an Position 2, das Hauptverb wandert als Infinitiv ans Satzende.',
    },
    regularLabel: 'Regelmäßig',
    irregularLabel: 'Unregelmäßig',
    regularNote: 'Regelmäßiges Verb — nutzt immer die Endungen -e, -st, -t, -en, -t, -en, ohne Änderung des Stammvokals.',
    irregularNote: 'Unregelmäßiges Verb — der Stammvokal ändert sich bei "du" und "er/sie", die Endungen bleiben gleich.',
    answersLabel: 'Mögliche Antworten',
    answerLabel: 'Antwort',
    yesLabel: 'Ja',
    noLabel: 'Nein',
    yesNoModeLabel: 'Ja/Nein',
    werModeLabel: 'Wer',
    whatModeLabel: 'Was',
    whereToModeLabel: 'Wohin',
    whereFromModeLabel: 'Woher',
    werExplain: '"Wer" ersetzt das Subjekt. Das Verb bleibt an Position 2, aber jetzt wählt die antwortende Person das Subjekt.',
    whatExplain: '"Was" ersetzt das Objekt — man fragt genau nach dem fehlenden Teil, deshalb fällt er aus dem Satz.',
    whereToExplain: '"Wohin" ersetzt das Ziel — "wohin" statt "wo", weil das Verb eine Bewegung zu einem Ort ausdrückt.',
    whereFromExplain: '"Woher" ersetzt die Herkunft — "woher" statt "wo", weil das Verb eine Bewegung von einem Ort weg ausdrückt.',
    restart: 'Neu starten',
    themeLight: 'Hell',
    themeDark: 'Dunkel',
    footerTagline: 'Keine Konten · alles bleibt im Browser',
    cookieBody: 'Ich verwende Google Analytics, um zu verstehen, wie viele Menschen dieses Projekt besuchen. Akzeptierst du Analyse-Cookies?',
    cookieAccept: 'Akzeptieren',
    cookieReject: 'Ablehnen',
  },
}
