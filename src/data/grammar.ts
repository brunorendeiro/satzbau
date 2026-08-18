export type SubjectId = 'ich' | 'du' | 'er' | 'wir' | 'ihr' | 'sie'
export type VerbId = 'lernen' | 'trinken' | 'kaufen' | 'gehen' | 'lesen' | 'sprechen'
export type ModalId = 'moechten' | 'wollen' | 'muessen'
export type Form = 'affirmative' | 'question' | 'negative' | 'twoVerbs'

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
  gender: 'm' | 'f' | 'n'
  article: 'indef' | 'none'
  pt: string
  en: string
}

export type PlaceObject = {
  id: string
  kind: 'place'
  phrase: string
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

const KEIN: Record<'m' | 'f' | 'n', string> = { m: 'keinen', f: 'keine', n: 'kein' }
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
      { id: 'berlin', kind: 'place', phrase: 'nach Berlin', pt: 'para Berlim', en: 'to Berlin' },
      { id: 'hause', kind: 'place', phrase: 'nach Hause', pt: 'para casa', en: 'home' },
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
]

export type Modal = {
  id: ModalId
  de: PerSubject
  pt: PerSubject
  ptNeedsDe: boolean
  en: string
}

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
  if (o.article === 'indef') return `${EIN[o.gender]} ${o.noun}`
  return o.noun
}

function objectDeNegative(o: VerbObject): { phrase: string; nichtBefore: boolean } {
  if (o.kind === 'place') return { phrase: o.phrase, nichtBefore: true }
  return { phrase: `${KEIN[o.gender]} ${o.noun}`, nichtBefore: false }
}

export function buildDe(form: Form, subject: SubjectId, verb: Verb, object: VerbObject, modal: Modal): string {
  const subj = subjects.find(s => s.id === subject)!
  const objPhrase = objectDeAffirmative(object)

  if (form === 'twoVerbs') {
    return `${cap(subj.de)} ${modal.de[subject]} ${objPhrase} ${verb.infinitive}.`
  }
  const verbWord = verb.de[subject]
  if (form === 'affirmative') return `${cap(subj.de)} ${verbWord} ${objPhrase}.`
  if (form === 'question') return `${cap(verbWord)} ${subj.de} ${objPhrase}?`

  const neg = objectDeNegative(object)
  return neg.nichtBefore
    ? `${cap(subj.de)} ${verbWord} nicht ${neg.phrase}.`
    : `${cap(subj.de)} ${verbWord} ${neg.phrase}.`
}

export function buildDeAnswer(kind: 'yes' | 'no', subject: SubjectId, verb: Verb, object: VerbObject): string {
  const subj = subjects.find(s => s.id === subject)!
  const verbWord = verb.de[subject]
  if (kind === 'yes') {
    return `Ja, ${subj.de} ${verbWord} ${objectDeAffirmative(object)}.`
  }
  const neg = objectDeNegative(object)
  return neg.nichtBefore
    ? `Nein, ${subj.de} ${verbWord} nicht ${neg.phrase}.`
    : `Nein, ${subj.de} ${verbWord} ${neg.phrase}.`
}

export function buildPt(form: Form, subject: SubjectId, verb: Verb, object: VerbObject, modal: Modal): string {
  const subj = subjects.find(s => s.id === subject)!
  if (form === 'twoVerbs') {
    const modalWord = modal.ptNeedsDe ? `${modal.pt[subject]} de` : modal.pt[subject]
    return `${cap(subj.pt)} ${modalWord} ${verb.meaningPt} ${object.pt}.`
  }
  const verbWord = verb.pt[subject]
  if (form === 'affirmative') return `${cap(subj.pt)} ${verbWord} ${object.pt}.`
  if (form === 'question') return `${cap(subj.pt)} ${verbWord} ${object.pt}?`
  return `${cap(subj.pt)} não ${verbWord} ${object.pt}.`
}

export function buildEn(form: Form, subject: SubjectId, verb: Verb, object: VerbObject, modal: Modal): string {
  const subj = subjects.find(s => s.id === subject)!
  const base = verb.en.ich
  const does = subject === 'er' ? 'does' : 'do'

  if (form === 'twoVerbs') {
    return `${cap(subj.en)} ${modal.en} ${base} ${object.en}.`
  }
  if (form === 'affirmative') return `${cap(subj.en)} ${verb.en[subject]} ${object.en}.`
  if (form === 'question') return `${cap(does)} ${subj.en} ${base} ${object.en}?`
  return `${cap(subj.en)} ${does} not ${base} ${object.en}.`
}
