export type SubjectId = 'ich' | 'du' | 'er' | 'wir' | 'ihr' | 'sie'
export type VerbId = 'lernen' | 'trinken' | 'kaufen' | 'gehen' | 'lesen' | 'sprechen' | 'machen' | 'sehen' | 'essen' | 'fahren' | 'schreiben' | 'spielen' | 'kommen'
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
   * (nach Berlin), "Woher" for an origin (aus Portugal) — they are not interchangeable. */
  whWord: 'Wohin' | 'Woher'
  pt: string
  en: string
}

export type VerbObject = NounObject | PlaceObject

export type Verb = {
  id: VerbId
  infinitive: string
  meaningPt: string
  meaningEn: string
  de: PerSubject
  pt: PerSubject
  en: PerSubject
  regular: boolean
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
  if (o.kind === 'place') return o.phrase
  if (o.article === 'indef' && o.gender !== 'pl') return `${EIN[o.gender]} ${o.noun}`
  return o.noun
}

function objectDeNegative(o: VerbObject): { phrase: string; nichtBefore: boolean } {
  if (o.kind === 'place') return { phrase: o.phrase, nichtBefore: true }
  return { phrase: `${KEIN[o.gender]} ${o.noun}`, nichtBefore: false }
}

/** A word (or short phrase) tagged with its grammatical role, used to color-code the
 * output sentence so the word-order rule (verb in 2nd position, infinitive at the end...)
 * is visible, not just stated in the explanation text below it. */
export type Token = { text: string; role: 'subject' | 'verb' | 'modal' | 'infinitive' | 'neg' | 'wh' | 'rest' | 'time' | 'manner' }

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
}

function tok(text: string, role: Token['role']): Token {
  return { text, role }
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

export function buildDeTokens(form: Form, subject: SubjectId, verb: Verb, object: VerbObject, modal: Modal, time: TimeAdverb, manner: MannerAdverb): Token[] {
  const subj = subjects.find(s => s.id === subject)!
  const objPhrase = objectDeAffirmative(object)
  const extras = deExtras(time, manner)

  if (form === 'twoVerbs') {
    return [tok(cap(subj.de), 'subject'), tok(modal.de[subject], 'modal'), ...extras, tok(objPhrase, 'rest'), tok(`${verb.infinitive}.`, 'infinitive')]
  }
  const verbWord = verb.de[subject]
  if (form === 'affirmative') return [tok(cap(subj.de), 'subject'), tok(verbWord, 'verb'), ...extras, tok(`${objPhrase}.`, 'rest')]
  if (form === 'question') return [tok(cap(verbWord), 'verb'), tok(subj.de, 'subject'), ...extras, tok(`${objPhrase}?`, 'rest')]

  const neg = objectDeNegative(object)
  return neg.nichtBefore
    ? [tok(cap(subj.de), 'subject'), tok(verbWord, 'verb'), ...extras, tok('nicht', 'neg'), tok(`${neg.phrase}.`, 'rest')]
    : [tok(cap(subj.de), 'subject'), tok(verbWord, 'verb'), ...extras, tok(`${neg.phrase}.`, 'neg')]
}

export function buildDeWerTokens(verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): Token[] {
  return [tok('Wer', 'subject'), tok(verb.de.er, 'verb'), ...deExtras(time, manner), tok(`${objectDeAffirmative(object)}?`, 'rest')]
}

export function buildDeContentTokens(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): Token[] {
  const subj = subjects.find(s => s.id === subject)!
  const whWord = object.kind === 'place' ? object.whWord : 'Was'
  return [tok(whWord, 'wh'), tok(verb.de[subject], 'verb'), tok(subj.de, 'subject'), ...deExtras(time, manner), tok(`${objectDeAffirmative(object)}?`, 'rest')]
}

export function buildDeWannTokens(subject: SubjectId, verb: Verb, object: VerbObject, manner: MannerAdverb): Token[] {
  const subj = subjects.find(s => s.id === subject)!
  const extras = manner.id !== NONE_ID ? [tok(manner.de, 'manner')] : []
  return [tok('Wann', 'wh'), tok(verb.de[subject], 'verb'), tok(subj.de, 'subject'), ...extras, tok(`${objectDeAffirmative(object)}?`, 'rest')]
}

export function buildDeWieTokens(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb): Token[] {
  const subj = subjects.find(s => s.id === subject)!
  const extras = time.id !== NONE_ID ? [tok(time.de, 'time')] : []
  return [tok('Wie', 'wh'), tok(verb.de[subject], 'verb'), tok(subj.de, 'subject'), ...extras, tok(`${objectDeAffirmative(object)}?`, 'rest')]
}

export function buildDeAnswer(kind: 'yes' | 'no', subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): string {
  const subj = subjects.find(s => s.id === subject)!
  const verbWord = verb.de[subject]
  const extras = [time.id !== NONE_ID ? time.de : null, manner.id !== NONE_ID ? manner.de : null].filter((s): s is string => !!s)
  if (kind === 'yes') {
    return `Ja, ${[subj.de, verbWord, ...extras, objectDeAffirmative(object)].join(' ')}.`
  }
  const neg = objectDeNegative(object)
  const tail = neg.nichtBefore ? ['nicht', neg.phrase] : [neg.phrase]
  return `Nein, ${[subj.de, verbWord, ...extras, ...tail].join(' ')}.`
}

/** Plain affirmative sentence with no "Ja,"/"Nein," prefix — the answer to an
 * open question (Wer/Was/Wohin/Woher/Wann/Wie), which isn't a yes/no question. */
export function buildDeOpenAnswer(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): string {
  const subj = subjects.find(s => s.id === subject)!
  const extras = [time.id !== NONE_ID ? time.de : null, manner.id !== NONE_ID ? manner.de : null].filter((s): s is string => !!s)
  return `${[cap(subj.de), verb.de[subject], ...extras, objectDeAffirmative(object)].join(' ')}.`
}

export function buildPt(form: Form, subject: SubjectId, verb: Verb, object: VerbObject, modal: Modal, time: TimeAdverb, manner: MannerAdverb): string {
  const subj = subjects.find(s => s.id === subject)!
  const extras = ptExtras(time, manner)
  if (form === 'twoVerbs') {
    const modalWord = modal.ptNeedsDe ? `${modal.pt[subject]} de` : modal.pt[subject]
    return `${[cap(subj.pt), modalWord, verb.meaningPt, object.pt, ...extras].join(' ')}.`
  }
  const verbWord = verb.pt[subject]
  if (form === 'affirmative') return `${[cap(subj.pt), verbWord, object.pt, ...extras].join(' ')}.`
  if (form === 'question') return `${[cap(subj.pt), verbWord, object.pt, ...extras].join(' ')}?`
  return `${[cap(subj.pt), 'não', verbWord, object.pt, ...extras].join(' ')}.`
}

export function buildPtWer(verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): string {
  return `Quem ${[verb.pt.er, object.pt, ...ptExtras(time, manner)].join(' ')}?`
}

export function buildPtContent(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): string {
  const verbWord = verb.pt[subject]
  const extras = ptExtras(time, manner)
  const tail = extras.length ? ` ${extras.join(' ')}` : ''
  if (object.kind !== 'place') return `O que ${verbWord}${tail}?`
  return object.whWord === 'Woher' ? `De onde ${verbWord}${tail}?` : `Para onde ${verbWord}${tail}?`
}

export function buildPtWann(subject: SubjectId, verb: Verb, object: VerbObject, manner: MannerAdverb): string {
  const tail = manner.id !== NONE_ID ? ` ${manner.pt}` : ''
  return `Quando ${verb.pt[subject]}${tail} ${object.pt}?`
}

export function buildPtWie(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb): string {
  const tail = time.id !== NONE_ID ? ` ${time.pt}` : ''
  return `Como ${verb.pt[subject]}${tail} ${object.pt}?`
}

export function buildEn(form: Form, subject: SubjectId, verb: Verb, object: VerbObject, modal: Modal, time: TimeAdverb, manner: MannerAdverb): string {
  const subj = subjects.find(s => s.id === subject)!
  const base = verb.en.ich
  const does = subject === 'er' ? 'does' : 'do'
  const extras = enExtras(time, manner)

  if (form === 'twoVerbs') {
    return `${[cap(subj.en), modal.en, base, object.en, ...extras].join(' ')}.`
  }
  if (form === 'affirmative') return `${[cap(subj.en), verb.en[subject], object.en, ...extras].join(' ')}.`
  if (form === 'question') return `${[cap(does), subj.en, base, object.en, ...extras].join(' ')}?`
  return `${[cap(subj.en), does, 'not', base, object.en, ...extras].join(' ')}.`
}

export function buildEnWer(verb: Verb, object: VerbObject, time: TimeAdverb, manner: MannerAdverb): string {
  return `Who ${[verb.en.er, object.en, ...enExtras(time, manner)].join(' ')}?`
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
  return `When ${does} ${subj.en} ${verb.en.ich}${tail} ${object.en}?`
}

export function buildEnWie(subject: SubjectId, verb: Verb, object: VerbObject, time: TimeAdverb): string {
  const subj = subjects.find(s => s.id === subject)!
  const does = subject === 'er' ? 'does' : 'do'
  const tail = time.id !== NONE_ID ? ` ${time.en}` : ''
  return `How ${does} ${subj.en} ${verb.en.ich}${tail} ${object.en}?`
}
