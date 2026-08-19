export type SubjectId = 'ich' | 'du' | 'er' | 'wir' | 'ihr' | 'sie'
export type VerbId = 'lernen' | 'trinken' | 'kaufen' | 'gehen' | 'lesen' | 'sprechen' | 'machen' | 'sehen' | 'essen' | 'fahren' | 'schreiben' | 'spielen' | 'kommen' | 'wohnen' | 'arbeiten' | 'hoeren' | 'kochen' | 'tragen' | 'oeffnen' | 'aufstehen' | 'einkaufen' | 'anrufen' | 'fernsehen'
export type ModalId = 'moechten' | 'wollen' | 'muessen'
export type Form = 'affirmative' | 'question' | 'negative' | 'twoVerbs'
export type QuestionMode = 'yesno' | 'wer' | 'content' | 'wann' | 'wie'

type PerSubject = Record<SubjectId, string>

export type Subject = {
  id: SubjectId
  de: string
  pt: string
  en: string
}

export const subjects: Subject[] = [
  { id: 'ich', de: 'ich', pt: 'eu', en: 'I' },
  { id: 'du', de: 'du', pt: 'tu', en: 'you' },
  { id: 'er', de: 'er', pt: 'ele/ela', en: 'he/she' },
  { id: 'wir', de: 'wir', pt: 'nós', en: 'we' },
  { id: 'ihr', de: 'ihr', pt: 'vós', en: 'you (pl.)' },
  { id: 'sie', de: 'sie', pt: 'eles/elas', en: 'they' },
]

export type NounObject = {
  id: string
  kind: 'noun'
  noun: string
  gender: 'm' | 'f' | 'n' | 'pl'
  article: 'indef' | 'none'
  pt: string
  en: string
}

export type PlaceObject = {
  id: string
  kind: 'place'
  phrase: string
  /** Which W-word this place takes in a content question: "Wohin" for a destination
   * (nach Berlin), "Woher" for an origin (aus Portugal), "Wo" for a static location
   * (in Lissabon) — they are not interchangeable. */
  whWord: 'Wohin' | 'Woher' | 'Wo'
  pt: string
  en: string
}

/** No complement at all — many of these verbs are perfectly fine used on
 * their own (Ich spiele.), and that's the cleanest way to show that "kein"
 * only ever negates a noun: with nothing to attach to, negation falls back
 * to plain "nicht" right after the verb (Ich spiele nicht.). */
export type NoObject = { id: string; kind: 'none' }

export const NONE_OBJECT_ID = 'none-obj'
const NONE_OBJECT: NoObject = { id: NONE_OBJECT_ID, kind: 'none' }

export type VerbObject = NounObject | PlaceObject | NoObject

export type Verb = {
  id: VerbId
  infinitive: string
  meaningPt: string
  meaningEn: string
  de: PerSubject
  pt: PerSubject
  en: PerSubject
  regular: boolean
  /** Separable verbs (trennbare Verben) — the prefix that splits off and jumps
   * to the very end of the clause whenever the verb itself is conjugated
   * (Ich stehe auf.), but stays joined in the infinitive after a modal verb
   * (Ich möchte aufstehen.). The `de` table above stores only the stem's
   * conjugation ("stehe", not "stehe auf") — the prefix is appended separately. */
  separablePrefix?: string
  objects: VerbObject[]
}

const KEIN: Record<'m' | 'f' | 'n' | 'pl', string> = { m: 'keinen', f: 'keine', n: 'kein', pl: 'keine' }
const EIN: Record<'m' | 'f' | 'n', string> = { m: 'einen', f: 'eine', n: 'ein' }

export const verbs: Verb[] = [
  {
    id: 'lernen',
    infinitive: 'lernen',
    meaningPt: 'aprender',
    meaningEn: 'learn',
    regular: true,
    de: { ich: 'lerne', du: 'lernst', er: 'lernt', wir: 'lernen', ihr: 'lernt', sie: 'lernen' },
    pt: { ich: 'aprendo', du: 'aprendes', er: 'aprende', wir: 'aprendemos', ihr: 'aprendeis', sie: 'aprendem' },
    en: { ich: 'learn', du: 'learn', er: 'learns', wir: 'learn', ihr: 'learn', sie: 'learn' },
    objects: [
      { id: 'deutsch', kind: 'noun', noun: 'Deutsch', gender: 'n', article: 'none', pt: 'alemão', en: 'German' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'trinken',
    infinitive: 'trinken',
    meaningPt: 'beber',
    meaningEn: 'drink',
    regular: true,
    de: { ich: 'trinke', du: 'trinkst', er: 'trinkt', wir: 'trinken', ihr: 'trinkt', sie: 'trinken' },
    pt: { ich: 'bebo', du: 'bebes', er: 'bebe', wir: 'bebemos', ihr: 'bebeis', sie: 'bebem' },
    en: { ich: 'drink', du: 'drink', er: 'drinks', wir: 'drink', ihr: 'drink', sie: 'drink' },
    objects: [
      { id: 'kaffee', kind: 'noun', noun: 'Kaffee', gender: 'm', article: 'none', pt: 'café', en: 'coffee' },
      { id: 'wasser', kind: 'noun', noun: 'Wasser', gender: 'n', article: 'none', pt: 'água', en: 'water' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'kaufen',
    infinitive: 'kaufen',
    meaningPt: 'comprar',
    meaningEn: 'buy',
    regular: true,
    de: { ich: 'kaufe', du: 'kaufst', er: 'kauft', wir: 'kaufen', ihr: 'kauft', sie: 'kaufen' },
    pt: { ich: 'compro', du: 'compras', er: 'compra', wir: 'compramos', ihr: 'comprais', sie: 'compram' },
    en: { ich: 'buy', du: 'buy', er: 'buys', wir: 'buy', ihr: 'buy', sie: 'buy' },
    objects: [
      { id: 'auto', kind: 'noun', noun: 'Auto', gender: 'n', article: 'indef', pt: 'um carro', en: 'a car' },
      { id: 'buch', kind: 'noun', noun: 'Buch', gender: 'n', article: 'indef', pt: 'um livro', en: 'a book' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'gehen',
    infinitive: 'gehen',
    meaningPt: 'ir',
    meaningEn: 'go',
    regular: true,
    de: { ich: 'gehe', du: 'gehst', er: 'geht', wir: 'gehen', ihr: 'geht', sie: 'gehen' },
    pt: { ich: 'vou', du: 'vais', er: 'vai', wir: 'vamos', ihr: 'ides', sie: 'vão' },
    en: { ich: 'go', du: 'go', er: 'goes', wir: 'go', ihr: 'go', sie: 'go' },
    objects: [
      { id: 'berlin', kind: 'place', phrase: 'nach Berlin', whWord: 'Wohin', pt: 'para Berlim', en: 'to Berlin' },
      { id: 'hause', kind: 'place', phrase: 'nach Hause', whWord: 'Wohin', pt: 'para casa', en: 'home' },
    ],
  },
  {
    id: 'lesen',
    infinitive: 'lesen',
    meaningPt: 'ler',
    meaningEn: 'read',
    regular: false,
    de: { ich: 'lese', du: 'liest', er: 'liest', wir: 'lesen', ihr: 'lest', sie: 'lesen' },
    pt: { ich: 'leio', du: 'lês', er: 'lê', wir: 'lemos', ihr: 'ledes', sie: 'leem' },
    en: { ich: 'read', du: 'read', er: 'reads', wir: 'read', ihr: 'read', sie: 'read' },
    objects: [
      { id: 'zeitung', kind: 'noun', noun: 'Zeitung', gender: 'f', article: 'indef', pt: 'um jornal', en: 'a newspaper' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'sprechen',
    infinitive: 'sprechen',
    meaningPt: 'falar',
    meaningEn: 'speak',
    regular: false,
    de: { ich: 'spreche', du: 'sprichst', er: 'spricht', wir: 'sprechen', ihr: 'sprecht', sie: 'sprechen' },
    pt: { ich: 'falo', du: 'falas', er: 'fala', wir: 'falamos', ihr: 'falais', sie: 'falam' },
    en: { ich: 'speak', du: 'speak', er: 'speaks', wir: 'speak', ihr: 'speak', sie: 'speak' },
    objects: [
      { id: 'deutsch2', kind: 'noun', noun: 'Deutsch', gender: 'n', article: 'none', pt: 'alemão', en: 'German' },
      { id: 'englisch', kind: 'noun', noun: 'Englisch', gender: 'n', article: 'none', pt: 'inglês', en: 'English' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'machen',
    infinitive: 'machen',
    meaningPt: 'fazer',
    meaningEn: 'do',
    regular: true,
    de: { ich: 'mache', du: 'machst', er: 'macht', wir: 'machen', ihr: 'macht', sie: 'machen' },
    pt: { ich: 'faço', du: 'fazes', er: 'faz', wir: 'fazemos', ihr: 'fazeis', sie: 'fazem' },
    en: { ich: 'do', du: 'do', er: 'does', wir: 'do', ihr: 'do', sie: 'do' },
    objects: [
      { id: 'hausaufgaben', kind: 'noun', noun: 'Hausaufgaben', gender: 'pl', article: 'none', pt: 'os trabalhos de casa', en: 'homework' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'sehen',
    infinitive: 'sehen',
    meaningPt: 'ver',
    meaningEn: 'see',
    regular: false,
    de: { ich: 'sehe', du: 'siehst', er: 'sieht', wir: 'sehen', ihr: 'seht', sie: 'sehen' },
    pt: { ich: 'vejo', du: 'vês', er: 'vê', wir: 'vemos', ihr: 'vedes', sie: 'veem' },
    en: { ich: 'see', du: 'see', er: 'sees', wir: 'see', ihr: 'see', sie: 'see' },
    objects: [
      { id: 'film', kind: 'noun', noun: 'Film', gender: 'm', article: 'indef', pt: 'um filme', en: 'a film' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'essen',
    infinitive: 'essen',
    meaningPt: 'comer',
    meaningEn: 'eat',
    regular: false,
    de: { ich: 'esse', du: 'isst', er: 'isst', wir: 'essen', ihr: 'esst', sie: 'essen' },
    pt: { ich: 'como', du: 'comes', er: 'come', wir: 'comemos', ihr: 'comeis', sie: 'comem' },
    en: { ich: 'eat', du: 'eat', er: 'eats', wir: 'eat', ihr: 'eat', sie: 'eat' },
    objects: [
      { id: 'apfel', kind: 'noun', noun: 'Apfel', gender: 'm', article: 'indef', pt: 'uma maçã', en: 'an apple' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'fahren',
    infinitive: 'fahren',
    meaningPt: 'conduzir',
    meaningEn: 'drive',
    regular: false,
    de: { ich: 'fahre', du: 'fährst', er: 'fährt', wir: 'fahren', ihr: 'fahrt', sie: 'fahren' },
    pt: { ich: 'conduzo', du: 'conduzes', er: 'conduz', wir: 'conduzimos', ihr: 'conduzis', sie: 'conduzem' },
    en: { ich: 'drive', du: 'drive', er: 'drives', wir: 'drive', ihr: 'drive', sie: 'drive' },
    objects: [
      { id: 'muenchen', kind: 'place', phrase: 'nach München', whWord: 'Wohin', pt: 'para Munique', en: 'to Munich' },
    ],
  },
  {
    id: 'schreiben',
    infinitive: 'schreiben',
    meaningPt: 'escrever',
    meaningEn: 'write',
    regular: true,
    de: { ich: 'schreibe', du: 'schreibst', er: 'schreibt', wir: 'schreiben', ihr: 'schreibt', sie: 'schreiben' },
    pt: { ich: 'escrevo', du: 'escreves', er: 'escreve', wir: 'escrevemos', ihr: 'escreveis', sie: 'escrevem' },
    en: { ich: 'write', du: 'write', er: 'writes', wir: 'write', ihr: 'write', sie: 'write' },
    objects: [
      { id: 'email', kind: 'noun', noun: 'E-Mail', gender: 'f', article: 'indef', pt: 'um e-mail', en: 'an email' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'spielen',
    infinitive: 'spielen',
    meaningPt: 'jogar',
    meaningEn: 'play',
    regular: true,
    de: { ich: 'spiele', du: 'spielst', er: 'spielt', wir: 'spielen', ihr: 'spielt', sie: 'spielen' },
    pt: { ich: 'jogo', du: 'jogas', er: 'joga', wir: 'jogamos', ihr: 'jogais', sie: 'jogam' },
    en: { ich: 'play', du: 'play', er: 'plays', wir: 'play', ihr: 'play', sie: 'play' },
    objects: [
      { id: 'fussball', kind: 'noun', noun: 'Fußball', gender: 'm', article: 'none', pt: 'futebol', en: 'football' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'kommen',
    infinitive: 'kommen',
    meaningPt: 'vir',
    meaningEn: 'come',
    regular: true,
    de: { ich: 'komme', du: 'kommst', er: 'kommt', wir: 'kommen', ihr: 'kommt', sie: 'kommen' },
    pt: { ich: 'venho', du: 'vens', er: 'vem', wir: 'vimos', ihr: 'vindes', sie: 'vêm' },
    en: { ich: 'come', du: 'come', er: 'comes', wir: 'come', ihr: 'come', sie: 'come' },
    objects: [
      { id: 'portugal', kind: 'place', phrase: 'aus Portugal', whWord: 'Woher', pt: 'de Portugal', en: 'from Portugal' },
      { id: 'deutschland', kind: 'place', phrase: 'aus Deutschland', whWord: 'Woher', pt: 'da Alemanha', en: 'from Germany' },
    ],
  },
  {
    id: 'wohnen',
    infinitive: 'wohnen',
    meaningPt: 'morar',
    meaningEn: 'live',
    regular: true,
    de: { ich: 'wohne', du: 'wohnst', er: 'wohnt', wir: 'wohnen', ihr: 'wohnt', sie: 'wohnen' },
    pt: { ich: 'moro', du: 'moras', er: 'mora', wir: 'moramos', ihr: 'morais', sie: 'moram' },
    en: { ich: 'live', du: 'live', er: 'lives', wir: 'live', ihr: 'live', sie: 'live' },
    objects: [
      { id: 'lissabon', kind: 'place', phrase: 'in Lissabon', whWord: 'Wo', pt: 'em Lisboa', en: 'in Lisbon' },
      { id: 'wien', kind: 'place', phrase: 'in Wien', whWord: 'Wo', pt: 'em Viena', en: 'in Vienna' },
    ],
  },
  {
    id: 'arbeiten',
    infinitive: 'arbeiten',
    meaningPt: 'trabalhar',
    meaningEn: 'work',
    regular: true,
    de: { ich: 'arbeite', du: 'arbeitest', er: 'arbeitet', wir: 'arbeiten', ihr: 'arbeitet', sie: 'arbeiten' },
    pt: { ich: 'trabalho', du: 'trabalhas', er: 'trabalha', wir: 'trabalhamos', ihr: 'trabalhais', sie: 'trabalham' },
    en: { ich: 'work', du: 'work', er: 'works', wir: 'work', ihr: 'work', sie: 'work' },
    objects: [
      { id: 'buero', kind: 'place', phrase: 'im Büro', whWord: 'Wo', pt: 'no escritório', en: 'in the office' },
      { id: 'zuhause-arbeiten', kind: 'place', phrase: 'zu Hause', whWord: 'Wo', pt: 'em casa', en: 'at home' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'hoeren',
    infinitive: 'hören',
    meaningPt: 'ouvir',
    meaningEn: 'hear',
    regular: true,
    de: { ich: 'höre', du: 'hörst', er: 'hört', wir: 'hören', ihr: 'hört', sie: 'hören' },
    pt: { ich: 'ouço', du: 'ouves', er: 'ouve', wir: 'ouvimos', ihr: 'ouvis', sie: 'ouvem' },
    en: { ich: 'hear', du: 'hear', er: 'hears', wir: 'hear', ihr: 'hear', sie: 'hear' },
    objects: [
      { id: 'musik', kind: 'noun', noun: 'Musik', gender: 'f', article: 'none', pt: 'música', en: 'music' },
      { id: 'hoerbuch', kind: 'noun', noun: 'Hörbuch', gender: 'n', article: 'indef', pt: 'um audiolivro', en: 'an audiobook' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'kochen',
    infinitive: 'kochen',
    meaningPt: 'cozinhar',
    meaningEn: 'cook',
    regular: true,
    de: { ich: 'koche', du: 'kochst', er: 'kocht', wir: 'kochen', ihr: 'kocht', sie: 'kochen' },
    pt: { ich: 'cozinho', du: 'cozinhas', er: 'cozinha', wir: 'cozinhamos', ihr: 'cozinhais', sie: 'cozinham' },
    en: { ich: 'cook', du: 'cook', er: 'cooks', wir: 'cook', ihr: 'cook', sie: 'cook' },
    objects: [
      { id: 'nudeln', kind: 'noun', noun: 'Nudeln', gender: 'pl', article: 'none', pt: 'massa', en: 'pasta' },
      { id: 'suppe', kind: 'noun', noun: 'Suppe', gender: 'f', article: 'indef', pt: 'uma sopa', en: 'a soup' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'tragen',
    infinitive: 'tragen',
    meaningPt: 'usar/vestir',
    meaningEn: 'wear',
    regular: false,
    de: { ich: 'trage', du: 'trägst', er: 'trägt', wir: 'tragen', ihr: 'tragt', sie: 'tragen' },
    pt: { ich: 'uso', du: 'usas', er: 'usa', wir: 'usamos', ihr: 'usais', sie: 'usam' },
    en: { ich: 'wear', du: 'wear', er: 'wears', wir: 'wear', ihr: 'wear', sie: 'wear' },
    objects: [
      { id: 'kleid', kind: 'noun', noun: 'Kleid', gender: 'n', article: 'indef', pt: 'um vestido', en: 'a dress' },
      { id: 'jacke', kind: 'noun', noun: 'Jacke', gender: 'f', article: 'indef', pt: 'um casaco', en: 'a jacket' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'oeffnen',
    infinitive: 'öffnen',
    meaningPt: 'abrir',
    meaningEn: 'open',
    regular: true,
    de: { ich: 'öffne', du: 'öffnest', er: 'öffnet', wir: 'öffnen', ihr: 'öffnet', sie: 'öffnen' },
    pt: { ich: 'abro', du: 'abres', er: 'abre', wir: 'abrimos', ihr: 'abris', sie: 'abrem' },
    en: { ich: 'open', du: 'open', er: 'opens', wir: 'open', ihr: 'open', sie: 'open' },
    objects: [
      { id: 'fenster', kind: 'noun', noun: 'Fenster', gender: 'n', article: 'indef', pt: 'uma janela', en: 'a window' },
      { id: 'tuer', kind: 'noun', noun: 'Tür', gender: 'f', article: 'indef', pt: 'uma porta', en: 'a door' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'aufstehen',
    infinitive: 'aufstehen',
    meaningPt: 'levantar-se',
    meaningEn: 'get up',
    regular: true,
    separablePrefix: 'auf',
    de: { ich: 'stehe', du: 'stehst', er: 'steht', wir: 'stehen', ihr: 'steht', sie: 'stehen' },
    pt: { ich: 'levanto-me', du: 'levantas-te', er: 'levanta-se', wir: 'levantamo-nos', ihr: 'levantais-vos', sie: 'levantam-se' },
    en: { ich: 'get up', du: 'get up', er: 'gets up', wir: 'get up', ihr: 'get up', sie: 'get up' },
    objects: [NONE_OBJECT],
  },
  {
    id: 'einkaufen',
    infinitive: 'einkaufen',
    meaningPt: 'fazer compras',
    meaningEn: 'go shopping',
    regular: true,
    separablePrefix: 'ein',
    de: { ich: 'kaufe', du: 'kaufst', er: 'kauft', wir: 'kaufen', ihr: 'kauft', sie: 'kaufen' },
    pt: { ich: 'faço compras', du: 'fazes compras', er: 'faz compras', wir: 'fazemos compras', ihr: 'fazeis compras', sie: 'fazem compras' },
    en: { ich: 'go shopping', du: 'go shopping', er: 'goes shopping', wir: 'go shopping', ihr: 'go shopping', sie: 'go shopping' },
    objects: [NONE_OBJECT],
  },
  {
    id: 'anrufen',
    infinitive: 'anrufen',
    meaningPt: 'telefonar/ligar',
    meaningEn: 'call',
    regular: true,
    separablePrefix: 'an',
    de: { ich: 'rufe', du: 'rufst', er: 'ruft', wir: 'rufen', ihr: 'ruft', sie: 'rufen' },
    pt: { ich: 'ligo', du: 'ligas', er: 'liga', wir: 'ligamos', ihr: 'ligais', sie: 'ligam' },
    en: { ich: 'call', du: 'call', er: 'calls', wir: 'call', ihr: 'call', sie: 'call' },
    objects: [
      { id: 'freund', kind: 'noun', noun: 'Freund', gender: 'm', article: 'indef', pt: 'um amigo', en: 'a friend' },
      { id: 'freundin', kind: 'noun', noun: 'Freundin', gender: 'f', article: 'indef', pt: 'uma amiga', en: 'a friend' },
      NONE_OBJECT,
    ],
  },
  {
    id: 'fernsehen',
    infinitive: 'fernsehen',
    meaningPt: 'ver televisão',
    meaningEn: 'watch TV',
    regular: false,
    separablePrefix: 'fern',
    de: { ich: 'sehe', du: 'siehst', er: 'sieht', wir: 'sehen', ihr: 'seht', sie: 'sehen' },
    pt: { ich: 'vejo televisão', du: 'vês televisão', er: 'vê televisão', wir: 'vemos televisão', ihr: 'vedes televisão', sie: 'veem televisão' },
    en: { ich: 'watch TV', du: 'watch TV', er: 'watches TV', wir: 'watch TV', ihr: 'watch TV', sie: 'watch TV' },
    objects: [NONE_OBJECT],
  },
]

export type Modal = {
  id: ModalId
  de: PerSubject
  pt: PerSubject
  ptNeedsDe: boolean
  en: string
}

/** Optional TeKaMoLo pieces: a time adverb ("heute") and a manner adverb ("gerne"),
 * each with a "none" sentinel meaning "leave it out of the sentence". */
export type TimeAdverb = { id: string; de: string; pt: string; en: string }
export type MannerAdverb = { id: string; de: string; pt: string; en: string }

export const NONE_ID = 'none'

export const timeAdverbs: TimeAdverb[] = [
  { id: NONE_ID, de: '', pt: '', en: '' },
  { id: 'heute', de: 'heute', pt: 'hoje', en: 'today' },
  { id: 'oft', de: 'oft', pt: 'muitas vezes', en: 'often' },
  { id: 'nie', de: 'nie', pt: 'nunca', en: 'never' },
  { id: 'morgen', de: 'morgen', pt: 'amanhã', en: 'tomorrow' },
]

export const mannerAdverbs: MannerAdverb[] = [
  { id: NONE_ID, de: '', pt: '', en: '' },
  { id: 'gut', de: 'gut', pt: 'bem', en: 'well' },
  { id: 'gerne', de: 'gerne', pt: 'com prazer', en: 'gladly' },
  { id: 'schnell', de: 'schnell', pt: 'rápido', en: 'quickly' },
  { id: 'langsam', de: 'langsam', pt: 'devagar', en: 'slowly' },
]

export const modals: Modal[] = [
  {
    id: 'moechten',
    de: { ich: 'möchte', du: 'möchtest', er: 'möchte', wir: 'möchten', ihr: 'möchtet', sie: 'möchten' },
    pt: { ich: 'gostaria', du: 'gostarias', er: 'gostaria', wir: 'gostaríamos', ihr: 'gostaríeis', sie: 'gostariam' },
    ptNeedsDe: true,
    en: 'would like to',
  },
  {
    id: 'wollen',
    de: { ich: 'will', du: 'willst', er: 'will', wir: 'wollen', ihr: 'wollt', sie: 'wollen' },
    pt: { ich: 'quero', du: 'queres', er: 'quer', wir: 'queremos', ihr: 'quereis', sie: 'querem' },
    ptNeedsDe: false,
    en: 'want to',
  },
  {
    id: 'muessen',
    de: { ich: 'muss', du: 'musst', er: 'muss', wir: 'müssen', ihr: 'müsst', sie: 'müssen' },
    pt: { ich: 'preciso', du: 'precisas', er: 'precisa', wir: 'precisamos', ihr: 'precisais', sie: 'precisam' },
    ptNeedsDe: true,
    en: 'need to',
  },
]

function cap(s: string): string {
  return s.length ? s[0].toUpperCase() + s.slice(1) : s
}

function objectDeAffirmative(o: VerbObject): string {
  if (o.kind === 'none') return ''
  if (o.kind === 'place') return o.phrase
  if (o.article === 'indef' && o.gender !== 'pl') return `${EIN[o.gender]} ${o.noun}`
  return o.noun
}

function objectDeNegative(o: VerbObject): { phrase: string; nichtBefore: boolean } {
  if (o.kind === 'none') return { phrase: '', nichtBefore: true }
  if (o.kind === 'place') return { phrase: o.phrase, nichtBefore: true }
  return { phrase: `${KEIN[o.gender]} ${o.noun}`, nichtBefore: false }
}

function objectPt(o: VerbObject): string {
  return o.kind === 'none' ? '' : o.pt
}

function objectEn(o: VerbObject): string {
  return o.kind === 'none' ? '' : o.en
}

/** A word (or short phrase) tagged with its grammatical role, used to color-code the
 * output sentence so the word-order rule (verb in 2nd position, infinitive at the end...)
 * is visible, not just stated in the explanation text below it. */
export type Token = { text: string; role: 'subject' | 'verb' | 'modal' | 'infinitive' | 'neg' | 'wh' | 'rest' | 'time' | 'manner' | 'particle' }

/** Real German grammar terms — used as small captions under each word of the
 * output sentence, turning it into a syntax gloss instead of a flat line of text. */
export const roleLabel: Record<Token['role'], string> = {
  subject: 'SUBJEKT',
  verb: 'VERB',
  modal: 'MODALVERB',
  infinitive: 'INFINITIV',
  neg: 'NEGATION',
  wh: 'W-WORT',
  rest: 'ERGÄNZUNG',
  time: 'ZEITANGABE',
  manner: 'MODALANGABE',
  particle: 'VERBZUSATZ',
}

function tok(text: string, role: Token['role']): Token {
  return { text, role }
}

/** Appends a punctuation mark to the last token's text — used so the closing
 * "." or "?" always lands on whatever token actually ends the sentence, even
 * when the object is omitted ("no object" chip) and the tail shifts. */
function withPunctuation(tokens: Token[], mark: string): Token[] {
  if (tokens.length === 0) return tokens
  const last = tokens[tokens.length - 1]
  return [...tokens.slice(0, -1), { ...last, text: `${last.text}${mark}` }]
}

/** Appends a separable verb's prefix as its own token at the very end of the
 * clause — the word-order rule that applies whenever the verb is conjugated
 * (not when it's an infinitive after a modal, which stays joined). No-op for
 * verbs that aren't separable. */
function pushSeparable(core: Token[], verb: Verb): void {
  if (verb.separablePrefix) core.push(tok(verb.separablePrefix, 'particle'))
}

function deExtras(time: TimeAdverb, manner: MannerAdverb): Token[] {
  const extras: Token[] = []
  if (time.id !== NONE_ID) extras.push(tok(time.de, 'time'))
  if (manner.id !== NONE_ID) extras.push(tok(manner.de, 'manner'))
  return extras
}

function ptExtras(time: TimeAdverb, manner: MannerAdverb): string[] {
  return [time.id !== NONE_ID ? time.pt : null, manner.id !== NONE_ID ? manner.pt : null].filter((s): s is string => !!s)
}

function enExtras(time: TimeAdverb, manner: MannerAdverb): string[] {
  return [time.id !== NONE_ID ? time.en : null, manner.id !== NONE_ID ? manner.en : null].filter((s): s is string => !!s)
}

export function buildDeTokens(form: Form, subject: SubjectId, verb: Verb, object: VerbObject, modal: Modal, time: TimeAdverb, manner: MannerAdverb, negatedQuestion = false): Token[] {
  const subj = subjects.find(s => s.id === subject)!
  const objPhrase = objectDeAffirmative(object)
  const extras = deExtras(time, manner)
  const neg = objectDeNegative(object)
  const hasObject = object.kind !== 'none'

  if (form === 'twoVerbs') {
    const core = [tok(cap(subj.de), 'subject'), tok(modal.de[subject], 'modal'), ...extras]
    if (hasObject) core.push(tok(objPhrase, 'rest'))
    core.push(tok(verb.infinitive, 'infinitive'))
    return withPunctuation(core, '.')
  }
  const verbWord = verb.de[subject]
  if (form === 'affirmative') {
    const core = [tok(cap(subj.de), 'subject'), tok(verbWord, 'verb'), ...extras]
    if (hasObject) core.push(tok(objPhrase, 'rest'))
    pushSeparable(core, verb)
    return withPunctuation(core, '.')
  }
  if (form === 'question') {
    const core = [tok(cap(verbWord), 'verb'), tok(subj.de, 'subject'), ...extras]
    if (negatedQuestion) {
      if (neg.nichtBefore) {
        core.push(tok('nicht', 'neg'))
        if (hasObject) core.push(tok(neg.phrase, 'rest'))
      } else {
        core.push(tok(neg.phrase, 'neg'))
      }
    } else if (hasObject) {
      core.push(tok(objPhrase, 'rest'))
    }
    pushSeparable(core, verb)
    return withPunctuation(core, '?')
  }

  const core = [tok(cap(subj.de), 'subject'), tok(verbWord, 'verb'), ...extras]
  if (neg.nichtBefore) {
    core.push(tok('nicht', 'neg'))
    if (hasObject) core.push(tok(neg.phrase, 'rest'))
  } else {
    core.push(tok(neg.phrase, 'neg'))
  }
  pushSeparable(core, verb)
  return withPunctuation(core, '.')
}

export function buildDeWerTokens(verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): Token[] {
  const core = [tok('Wer', 'subject'), tok(verb.de.er, 'verb'), ...deExtras(time, manner)]
  if (object.kind !== 'none') core.push(tok(objectDeAffirmative(object), 'rest'))
  pushSeparable(core, verb)
  return withPunctuation(core, '?')
}

/** The object never appears here — "Was"/"Wohin"/"Woher" already asks for it,
 * so repeating it ("Was lernst du Deutsch?") would be redundant/wrong. */
export function buildDeContentTokens(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): Token[] {
  const subj = subjects.find(s => s.id === subject)!
  const whWord = object.kind === 'place' ? object.whWord : 'Was'
  const core = [tok(whWord, 'wh'), tok(verb.de[subject], 'verb'), tok(subj.de, 'subject'), ...deExtras(time, manner)]
  pushSeparable(core, verb)
  return withPunctuation(core, '?')
}

export function buildDeWannTokens(subject: SubjectId, verb: Verb, object: VerbObject, manner: MannerAdverb): Token[] {
  const subj = subjects.find(s => s.id === subject)!
  const extras = manner.id !== NONE_ID ? [tok(manner.de, 'manner')] : []
  const core = [tok('Wann', 'wh'), tok(verb.de[subject], 'verb'), tok(subj.de, 'subject'), ...extras]
  if (object.kind !== 'none') core.push(tok(objectDeAffirmative(object), 'rest'))
  pushSeparable(core, verb)
  return withPunctuation(core, '?')
}

export function buildDeWieTokens(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb): Token[] {
  const subj = subjects.find(s => s.id === subject)!
  const extras = time.id !== NONE_ID ? [tok(time.de, 'time')] : []
  const core = [tok('Wie', 'wh'), tok(verb.de[subject], 'verb'), tok(subj.de, 'subject'), ...extras]
  if (object.kind !== 'none') core.push(tok(objectDeAffirmative(object), 'rest'))
  pushSeparable(core, verb)
  return withPunctuation(core, '?')
}

/** "Ja" answers a question phrased affirmatively; "Doch" answers one phrased
 * negatively when you're contradicting it (Magst du kein Bier? — Doch, ich mag Bier.).
 * Using "Ja" there would be wrong — Doch exists specifically to avoid that ambiguity. */
export function buildDeAnswer(kind: 'yes' | 'no', subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb, negatedQuestion = false): string {
  const subj = subjects.find(s => s.id === subject)!
  const verbWord = verb.de[subject]
  const extras = [time.id !== NONE_ID ? time.de : null, manner.id !== NONE_ID ? manner.de : null].filter((s): s is string => !!s)
  if (kind === 'yes') {
    const prefix = negatedQuestion ? 'Doch' : 'Ja'
    return `${prefix}, ${[subj.de, verbWord, ...extras, objectDeAffirmative(object), verb.separablePrefix].filter(Boolean).join(' ')}.`
  }
  const neg = objectDeNegative(object)
  const tail = neg.nichtBefore ? ['nicht', neg.phrase] : [neg.phrase]
  return `Nein, ${[subj.de, verbWord, ...extras, ...tail, verb.separablePrefix].filter(Boolean).join(' ')}.`
}

/** Plain affirmative sentence with no "Ja,"/"Nein," prefix — the answer to an
 * open question (Wer/Was/Wohin/Woher/Wann/Wie), which isn't a yes/no question. */
export function buildDeOpenAnswer(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): string {
  const subj = subjects.find(s => s.id === subject)!
  const extras = [time.id !== NONE_ID ? time.de : null, manner.id !== NONE_ID ? manner.de : null].filter((s): s is string => !!s)
  return `${[cap(subj.de), verb.de[subject], ...extras, objectDeAffirmative(object), verb.separablePrefix].filter(Boolean).join(' ')}.`
}

export function buildPt(form: Form, subject: SubjectId, verb: Verb, object: VerbObject, modal: Modal, time: TimeAdverb, manner: MannerAdverb, negatedQuestion = false): string {
  const subj = subjects.find(s => s.id === subject)!
  const extras = ptExtras(time, manner)
  const objPt = objectPt(object)
  if (form === 'twoVerbs') {
    const modalWord = modal.ptNeedsDe ? `${modal.pt[subject]} de` : modal.pt[subject]
    return `${[cap(subj.pt), modalWord, verb.meaningPt, objPt, ...extras].filter(Boolean).join(' ')}.`
  }
  const verbWord = verb.pt[subject]
  if (form === 'affirmative') return `${[cap(subj.pt), verbWord, objPt, ...extras].filter(Boolean).join(' ')}.`
  if (form === 'question') {
    const neg = negatedQuestion ? 'não ' : ''
    return `${[cap(subj.pt), `${neg}${verbWord}`, objPt, ...extras].filter(Boolean).join(' ')}?`
  }
  return `${[cap(subj.pt), 'não', verbWord, objPt, ...extras].filter(Boolean).join(' ')}.`
}

export function buildPtWer(verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): string {
  return `Quem ${[verb.pt.er, objectPt(object), ...ptExtras(time, manner)].filter(Boolean).join(' ')}?`
}

export function buildPtContent(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): string {
  const verbWord = verb.pt[subject]
  const extras = ptExtras(time, manner)
  const tail = extras.length ? ` ${extras.join(' ')}` : ''
  if (object.kind !== 'place') return `O que ${verbWord}${tail}?`
  if (object.whWord === 'Woher') return `De onde ${verbWord}${tail}?`
  if (object.whWord === 'Wo') return `Onde ${verbWord}${tail}?`
  return `Para onde ${verbWord}${tail}?`
}

export function buildPtWann(subject: SubjectId, verb: Verb, object: VerbObject, manner: MannerAdverb): string {
  const tail = manner.id !== NONE_ID ? ` ${manner.pt}` : ''
  const objPt = objectPt(object)
  return `Quando ${verb.pt[subject]}${tail}${objPt ? ` ${objPt}` : ''}?`
}

export function buildPtWie(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb): string {
  const tail = time.id !== NONE_ID ? ` ${time.pt}` : ''
  const objPt = objectPt(object)
  return `Como ${verb.pt[subject]}${tail}${objPt ? ` ${objPt}` : ''}?`
}

export function buildEn(form: Form, subject: SubjectId, verb: Verb, object: VerbObject, modal: Modal, time: TimeAdverb, manner: MannerAdverb, negatedQuestion = false): string {
  const subj = subjects.find(s => s.id === subject)!
  const base = verb.en.ich
  const does = subject === 'er' ? 'does' : 'do'
  const extras = enExtras(time, manner)
  const objEn = objectEn(object)

  if (form === 'twoVerbs') {
    return `${[cap(subj.en), modal.en, base, objEn, ...extras].filter(Boolean).join(' ')}.`
  }
  if (form === 'affirmative') return `${[cap(subj.en), verb.en[subject], objEn, ...extras].filter(Boolean).join(' ')}.`
  if (form === 'question') {
    const notWord = negatedQuestion ? 'not' : ''
    return `${[cap(does), subj.en, notWord, base, objEn, ...extras].filter(Boolean).join(' ')}?`
  }
  return `${[cap(subj.en), does, 'not', base, objEn, ...extras].filter(Boolean).join(' ')}.`
}

export function buildEnWer(verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): string {
  return `Who ${[verb.en.er, objectEn(object), ...enExtras(time, manner)].filter(Boolean).join(' ')}?`
}

export function buildEnContent(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): string {
  const subj = subjects.find(s => s.id === subject)!
  const base = verb.en.ich
  const does = subject === 'er' ? 'does' : 'do'
  const extras = enExtras(time, manner)
  const tail = extras.length ? ` ${extras.join(' ')}` : ''
  if (object.kind !== 'place') return `What ${does} ${subj.en} ${base}${tail}?`
  return object.whWord === 'Woher'
    ? `Where ${does} ${subj.en} ${base}${tail} from?`
    : `Where ${does} ${subj.en} ${base}${tail}?`
}

export function buildEnWann(subject: SubjectId, verb: Verb, object: VerbObject, manner: MannerAdverb): string {
  const subj = subjects.find(s => s.id === subject)!
  const does = subject === 'er' ? 'does' : 'do'
  const tail = manner.id !== NONE_ID ? ` ${manner.en}` : ''
  const objEn = objectEn(object)
  return `When ${does} ${subj.en} ${verb.en.ich}${tail}${objEn ? ` ${objEn}` : ''}?`
}

export function buildEnWie(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb): string {
  const subj = subjects.find(s => s.id === subject)!
  const does = subject === 'er' ? 'does' : 'do'
  const tail = time.id !== NONE_ID ? ` ${time.en}` : ''
  const objEn = objectEn(object)
  return `How ${does} ${subj.en} ${verb.en.ich}${tail}${objEn ? ` ${objEn}` : ''}?`
}
