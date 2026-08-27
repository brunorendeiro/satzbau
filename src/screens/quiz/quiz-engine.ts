import type { Locale } from '../../i18n/common'
import { colors, greetings, weekdays, months, seasons, type VocabEntry } from '../vocabulary/data'
import { breakdown } from '../numbers/germanNumbers'
import { genderRules, genderCategories } from '../word-family/data'
import { compoundWords } from '../compound-words/data'
import {
  subjects, verbs, modals, timeAdverbs, mannerAdverbs,
  buildDeTokens, buildPt, buildEn, type Verb,
} from '../sentence-builder/data/grammar'

export type QuizCategory =
  | 'vocab' | 'numbers' | 'arithmetic' | 'gender' | 'pronoun'
  | 'compound' | 'verbs' | 'question-word' | 'profession' | 'reading' | 'sentence'

export type QuizLevel = 'easy' | 'medium' | 'hard'

type Base = { id: string; category: QuizCategory; hint?: string; gloss?: string }

export type ChoiceQuestion = Base & { kind: 'choice'; prompt: string; choices: string[]; correctIndex: number }
export type TypedQuestion = Base & { kind: 'typed'; prompt: string; answer: string }
export type ArrangeQuestion = Base & { kind: 'arrange'; gloss: string; tokens: string[]; answerTokens: string[] }

export type QuizQuestion = ChoiceQuestion | TypedQuestion | ArrangeQuestion

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n)
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function buildChoiceSet(correct: string, distractorPool: string[], count = 4): { choices: string[]; correctIndex: number } {
  const unique = Array.from(new Set(distractorPool.filter(d => d !== correct)))
  const picked = sample(unique, count - 1)
  const shuffled = shuffle([correct, ...picked])
  return { choices: shuffled, correctIndex: shuffled.indexOf(correct) }
}

function vocabMeaning(entry: VocabEntry, locale: Locale): string {
  return locale === 'en' ? entry.en : entry.pt
}

// ---------------------------------------------------------------------------
// 1. Vocabulary — colors, greetings, weekdays, months, seasons
// ---------------------------------------------------------------------------
function vocabQuestions(locale: Locale): ChoiceQuestion[] {
  const pools: { name: string; items: VocabEntry[] }[] = [
    { name: 'colors', items: colors },
    { name: 'greetings', items: greetings },
    { name: 'weekdays', items: weekdays },
    { name: 'months', items: months },
    { name: 'seasons', items: seasons },
  ]
  const qs: ChoiceQuestion[] = []
  pools.forEach(pool => {
    if (pool.items.length < 4) return
    const meanings = pool.items.map(e => vocabMeaning(e, locale))
    pool.items.forEach(entry => {
      const correct = vocabMeaning(entry, locale)
      const { choices, correctIndex } = buildChoiceSet(correct, meanings)
      qs.push({ id: `vocab-${pool.name}-${entry.id}`, kind: 'choice', category: 'vocab', prompt: entry.de, choices, correctIndex })
    })
  })
  return qs
}

// ---------------------------------------------------------------------------
// 2. Numbers — say the German word for a number (multiple choice)
// ---------------------------------------------------------------------------
function numberQuestions(): ChoiceQuestion[] {
  const all = Array.from({ length: 101 }, (_, i) => i)
  const allWords = all.map(n => breakdown(n).word)
  return sample(all, 12).map(n => {
    const correct = breakdown(n).word
    const { choices, correctIndex } = buildChoiceSet(correct, allWords)
    return { id: `number-${n}`, kind: 'choice', category: 'numbers', prompt: String(n), choices, correctIndex }
  })
}

// ---------------------------------------------------------------------------
// 3. Arithmetic — type the German word for the result (plus/minus/mal)
// ---------------------------------------------------------------------------
function arithmeticQuestion(level: QuizLevel): TypedQuestion {
  const op = pick(['plus', 'minus', 'mal'] as const)
  let a: number, b: number, result: number, symbol: string
  if (op === 'plus') {
    const cap = level === 'easy' ? 10 : level === 'medium' ? 30 : 60
    a = Math.floor(Math.random() * (cap + 1))
    b = Math.floor(Math.random() * (level === 'hard' ? 100 - a + 1 : cap + 1))
    result = a + b
    symbol = '+'
  } else if (op === 'minus') {
    const cap = level === 'easy' ? 20 : level === 'medium' ? 50 : 100
    a = Math.floor(Math.random() * (cap + 1))
    b = Math.floor(Math.random() * (a + 1))
    result = a - b
    symbol = '−'
  } else {
    const factorCap = level === 'easy' ? 5 : level === 'medium' ? 8 : 10
    a = Math.floor(Math.random() * factorCap) + 1
    b = Math.floor(Math.random() * (level === 'hard' ? Math.floor(100 / a) : factorCap)) + 1
    result = a * b
    symbol = '×'
  }
  return {
    id: `arith-${op}-${a}-${b}-${Date.now()}-${Math.random()}`,
    kind: 'typed',
    category: 'arithmetic',
    prompt: `${a} ${symbol} ${b} = ?`,
    answer: breakdown(result).word,
  }
}

function arithmeticQuestions(n: number, level: QuizLevel): TypedQuestion[] {
  return Array.from({ length: n }, () => arithmeticQuestion(level))
}

// ---------------------------------------------------------------------------
// 4/5. Gender (der/die/das) & pronoun (er/sie/es) — same source words
// ---------------------------------------------------------------------------
function genderWordPool(): { word: string; article: 'der' | 'die' | 'das' }[] {
  const items: { word: string; article: 'der' | 'die' | 'das' }[] = []
  genderRules.forEach(r => r.examples.forEach(ex => items.push({ word: ex.word, article: r.article })))
  genderCategories.forEach(c => c.examples.forEach(ex => items.push({ word: ex.word, article: c.article })))
  return items
}

function genderQuestions(): ChoiceQuestion[] {
  return genderWordPool().map((item, i) => {
    const others = (['der', 'die', 'das'] as const).filter(a => a !== item.article)
    const choices = shuffle([item.article, ...others])
    return { id: `gender-${i}-${item.word}`, kind: 'choice', category: 'gender', prompt: item.word, choices, correctIndex: choices.indexOf(item.article) }
  })
}

const PRONOUN_FOR: Record<'der' | 'die' | 'das', string> = { der: 'er', die: 'sie', das: 'es' }

function pronounQuestions(): ChoiceQuestion[] {
  return genderWordPool().map((item, i) => {
    const correct = PRONOUN_FOR[item.article]
    const others = ['er', 'sie', 'es'].filter(p => p !== correct)
    const choices = shuffle([correct, ...others])
    return { id: `pronoun-${i}-${item.word}`, kind: 'choice', category: 'pronoun', prompt: item.word, choices, correctIndex: choices.indexOf(correct) }
  })
}

// ---------------------------------------------------------------------------
// 6. Compound words — Kummer + Speck = ?
// ---------------------------------------------------------------------------
function compoundQuestions(): ChoiceQuestion[] {
  const allCompounds = compoundWords.map(c => c.compound.de)
  return compoundWords.map(cw => {
    const correct = cw.compound.de
    const { choices, correctIndex } = buildChoiceSet(correct, allCompounds)
    return { id: `compound-${cw.id}`, kind: 'choice', category: 'compound', prompt: `${cw.part1.de} + ${cw.part2.de}`, choices, correctIndex }
  })
}

// ---------------------------------------------------------------------------
// 7. Verbs — what does "lernen" mean?
// ---------------------------------------------------------------------------
function verbQuestions(locale: Locale): ChoiceQuestion[] {
  const meanings = verbs.map(v => (locale === 'en' ? v.meaningEn : v.meaningPt))
  return verbs.map(v => {
    const correct = locale === 'en' ? v.meaningEn : v.meaningPt
    const { choices, correctIndex } = buildChoiceSet(correct, meanings)
    return { id: `verb-${v.id}`, kind: 'choice', category: 'verbs', prompt: v.infinitive, choices, correctIndex }
  })
}

// ---------------------------------------------------------------------------
// 8. Question words — which W-word fits this statement?
// ---------------------------------------------------------------------------
const QUESTION_WORDS = ['Wer', 'Was', 'Wo', 'Wann', 'Wie', 'Warum', 'Woher', 'Wohin'] as const

const QUESTION_WORD_ITEMS: { statement: string; word: (typeof QUESTION_WORDS)[number] }[] = [
  { statement: 'Ich heiße Anna.', word: 'Wie' },
  { statement: 'Ich bin 25 Jahre alt.', word: 'Wie' },
  { statement: 'Ich wohne in Berlin.', word: 'Wo' },
  { statement: 'Das Buch liegt auf dem Tisch.', word: 'Wo' },
  { statement: 'Der Zug kommt um 8 Uhr.', word: 'Wann' },
  { statement: 'Wir feiern am Samstag.', word: 'Wann' },
  { statement: 'Das ist meine Schwester.', word: 'Wer' },
  { statement: 'Der Lehrer erklärt die Grammatik.', word: 'Wer' },
  { statement: 'Ich lerne Deutsch.', word: 'Was' },
  { statement: 'Sie trinkt einen Kaffee.', word: 'Was' },
  { statement: 'Ich bin müde, weil ich schlecht geschlafen habe.', word: 'Warum' },
  { statement: 'Er lacht, weil der Witz lustig war.', word: 'Warum' },
  { statement: 'Ich komme aus Portugal.', word: 'Woher' },
  { statement: 'Der Zug kommt aus München.', word: 'Woher' },
  { statement: 'Ich fahre nach Hamburg.', word: 'Wohin' },
  { statement: 'Wir gehen ins Kino.', word: 'Wohin' },
]

function questionWordQuestions(): ChoiceQuestion[] {
  return QUESTION_WORD_ITEMS.map((item, i) => {
    const { choices, correctIndex } = buildChoiceSet(item.word, [...QUESTION_WORDS])
    return { id: `qword-${i}`, kind: 'choice', category: 'question-word', prompt: item.statement, choices, correctIndex }
  })
}

// ---------------------------------------------------------------------------
// 9. Professions — feminine form
// ---------------------------------------------------------------------------
const PROFESSIONS: { m: string; f: string }[] = [
  { m: 'der Lehrer', f: 'die Lehrerin' },
  { m: 'der Arzt', f: 'die Ärztin' },
  { m: 'der Koch', f: 'die Köchin' },
  { m: 'der Verkäufer', f: 'die Verkäuferin' },
  { m: 'der Schauspieler', f: 'die Schauspielerin' },
  { m: 'der Sänger', f: 'die Sängerin' },
  { m: 'der Polizist', f: 'die Polizistin' },
  { m: 'der Student', f: 'die Studentin' },
  { m: 'der Fahrer', f: 'die Fahrerin' },
  { m: 'der Friseur', f: 'die Friseurin' },
  { m: 'der Kellner', f: 'die Kellnerin' },
  { m: 'der Journalist', f: 'die Journalistin' },
]

function professionQuestions(): ChoiceQuestion[] {
  const allFem = PROFESSIONS.map(p => p.f)
  return PROFESSIONS.map((p, i) => {
    const { choices, correctIndex } = buildChoiceSet(p.f, allFem)
    return { id: `profession-${i}`, kind: 'choice', category: 'profession', prompt: p.m, choices, correctIndex }
  })
}

// ---------------------------------------------------------------------------
// 10. Reading — a mini-text about a sport or a profession, then one question
// ---------------------------------------------------------------------------
const READING_ITEMS: { text: string; question: string; correct: string; distractors: string[] }[] = [
  {
    text: 'Anna ist Ärztin. Sie arbeitet in einem Krankenhaus in Berlin. Sie hilft kranken Menschen.',
    question: 'Was ist Annas Beruf?',
    correct: 'Ärztin',
    distractors: ['Lehrerin', 'Polizistin', 'Köchin'],
  },
  {
    text: 'Max spielt jeden Samstag Fußball. Er ist der Torwart seiner Mannschaft. Nach dem Spiel trinkt er immer Wasser.',
    question: 'Welche Position spielt Max?',
    correct: 'Torwart',
    distractors: ['Stürmer', 'Trainer', 'Schiedsrichter'],
  },
  {
    text: 'Lena arbeitet als Köchin in einem kleinen Restaurant. Sie kocht jeden Tag frisches Essen. Ihr Lieblingsgericht ist Schnitzel.',
    question: 'Wo arbeitet Lena?',
    correct: 'in einem Restaurant',
    distractors: ['in einer Schule', 'in einem Krankenhaus', 'in einem Büro'],
  },
  {
    text: 'Tom schwimmt seit fünf Jahren im Verein. Er trainiert dreimal die Woche im Schwimmbad. Sein Ziel ist eine Medaille.',
    question: 'Wie oft trainiert Tom?',
    correct: 'dreimal die Woche',
    distractors: ['einmal die Woche', 'jeden Tag', 'einmal im Monat'],
  },
  {
    text: 'Frau Berger ist Lehrerin an einer Grundschule. Sie unterrichtet Deutsch und Mathematik. Die Kinder mögen ihren Unterricht.',
    question: 'Was unterrichtet Frau Berger?',
    correct: 'Deutsch und Mathematik',
    distractors: ['Sport und Kunst', 'Musik und Englisch', 'Geschichte und Physik'],
  },
  {
    text: 'Paul fährt gerne Fahrrad. Am Wochenende macht er lange Touren durch den Wald. Er trägt immer einen Helm.',
    question: 'Was trägt Paul immer?',
    correct: 'einen Helm',
    distractors: ['eine Brille', 'eine Jacke', 'einen Rucksack'],
  },
]

function readingQuestions(): ChoiceQuestion[] {
  return READING_ITEMS.map((item, i) => {
    const choices = shuffle([item.correct, ...item.distractors])
    return {
      id: `reading-${i}`,
      kind: 'choice',
      category: 'reading',
      hint: item.text,
      prompt: item.question,
      choices,
      correctIndex: choices.indexOf(item.correct),
    }
  })
}

// ---------------------------------------------------------------------------
// 11. Sentence building — tap the German words in the right order
// ---------------------------------------------------------------------------
function sentenceQuestions(locale: Locale, level: QuizLevel): (ArrangeQuestion | ChoiceQuestion)[] {
  const noneTime = timeAdverbs[0]
  const noneManner = mannerAdverbs[0]
  const noneModal = modals[0]
  const combos: { verb: Verb; object: (typeof verbs)[number]['objects'][number] }[] = []
  verbs.forEach(verb => verb.objects.forEach(object => combos.push({ verb, object })))

  const picked = sample(combos, 18)

  return picked.map(({ verb, object }, i) => {
    const subject = pick(subjects)
    const tokens = buildDeTokens('affirmative', subject.id, verb, object, noneModal, noneTime, noneManner)
    const words = tokens.map(t => t.text)
    const sentence = words.join(' ')
    const gloss = locale === 'en'
      ? buildEn('affirmative', subject.id, verb, object, noneModal, noneTime, noneManner)
      : buildPt('affirmative', subject.id, verb, object, noneModal, noneTime, noneManner)
    const id = `sentence-${i}-${verb.id}-${object.id}`

    if (level === 'easy') {
      const others = sample(picked.filter((_, j) => j !== i), 3).map(({ verb: v2, object: o2 }) => {
        const s2 = pick(subjects)
        return buildDeTokens('affirmative', s2.id, v2, o2, noneModal, noneTime, noneManner).map(t => t.text).join(' ')
      })
      const { choices, correctIndex } = buildChoiceSet(sentence, others)
      return { id, kind: 'choice', category: 'sentence', prompt: '', gloss, choices, correctIndex }
    }

    let shuffled = shuffle(words)
    if (words.length > 1) {
      let guard = 0
      while (shuffled.join(' ') === sentence && guard < 10) {
        shuffled = shuffle(words)
        guard++
      }
    }
    return { id, kind: 'arrange', category: 'sentence', gloss, tokens: shuffled, answerTokens: words }
  })
}

// ---------------------------------------------------------------------------
// Pool builder
// ---------------------------------------------------------------------------
export function buildQuestionPool(locale: Locale, level: QuizLevel = 'medium'): QuizQuestion[] {
  return shuffle([
    ...vocabQuestions(locale),
    ...numberQuestions(),
    ...arithmeticQuestions(15, level),
    ...genderQuestions(),
    ...pronounQuestions(),
    ...compoundQuestions(),
    ...verbQuestions(locale),
    ...questionWordQuestions(),
    ...professionQuestions(),
    ...readingQuestions(),
    ...sentenceQuestions(locale, level),
  ])
}

/** Normalizes a typed German answer for comparison — case-insensitive and
 * tolerant of "ss" typed instead of "ß" (common without a German keyboard). */
export function normalizeAnswer(s: string): string {
  return s.trim().toLowerCase().replace(/ß/g, 'ss')
}
