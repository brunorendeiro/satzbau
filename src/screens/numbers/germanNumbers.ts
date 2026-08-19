/** German 0-100, built from a small rule table instead of 101 hardcoded
 * words — matches how the numbers actually work: units, a "-zehn" suffix
 * for the teens, a "-zig" suffix for the tens, and unit+"und"+ten for
 * everything in between. */

export type NumberRule = 'base' | 'teen' | 'tenRegular' | 'tenIrregular' | 'combo' | 'hundred'

export type NumberPart = { text: string; isStem: boolean }

export type NumberBreakdown = {
  n: number
  word: string
  parts: NumberPart[]
  rule: NumberRule
}

const UNITS = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf']

/** Stems used when building teens/tens — a couple of units lose a letter
 * (sechs -> sech-, sieben -> sieb-) before "-zehn"/"-zig" is attached. */
const STEMS: Record<number, string> = { 3: 'drei', 4: 'vier', 5: 'fünf', 6: 'sech', 7: 'sieb', 8: 'acht', 9: 'neun' }

const TENS_REGULAR: Record<number, string> = { 40: 'vierzig', 50: 'fünfzig', 60: 'sechzig', 70: 'siebzig', 80: 'achtzig', 90: 'neunzig' }
const TENS_IRREGULAR: Record<number, string> = { 20: 'zwanzig', 30: 'dreißig' }

export function breakdown(n: number): NumberBreakdown {
  if (n <= 12) {
    return { n, word: UNITS[n], parts: [{ text: UNITS[n], isStem: false }], rule: 'base' }
  }
  if (n <= 19) {
    const stem = STEMS[n - 10]
    const word = `${stem}zehn`
    return { n, word, parts: [{ text: stem, isStem: true }, { text: 'zehn', isStem: false }], rule: 'teen' }
  }
  if (n % 10 === 0 && n <= 90) {
    if (TENS_IRREGULAR[n]) return { n, word: TENS_IRREGULAR[n], parts: [{ text: TENS_IRREGULAR[n], isStem: false }], rule: 'tenIrregular' }
    return { n, word: TENS_REGULAR[n], parts: [{ text: STEMS[n / 10], isStem: true }, { text: 'zig', isStem: false }], rule: 'tenRegular' }
  }
  if (n === 100) {
    return { n, word: 'hundert', parts: [{ text: 'hundert', isStem: false }], rule: 'hundred' }
  }
  const ten = Math.floor(n / 10) * 10
  const unit = n % 10
  const unitWord = unit === 1 ? 'ein' : UNITS[unit]
  const tenWord = TENS_IRREGULAR[ten] ?? TENS_REGULAR[ten]
  return {
    n,
    word: `${unitWord}und${tenWord}`,
    parts: [{ text: unitWord, isStem: true }, { text: 'und', isStem: false }, { text: tenWord, isStem: true }],
    rule: 'combo',
  }
}

/** Numbers worth jumping straight to — one example per rule. */
export const highlights = [0, 7, 12, 13, 16, 17, 20, 21, 30, 47, 66, 77, 100]

/** Beyond 100 the same logic keeps going (unit + "hundert"/"tausend"),
 * just shown as a plain reference list instead of the interactive slider.
 * Kept in ascending order — it's a reference, not a random bag of examples. */
export type BigNumber = { label: string; word: string; noteKey?: 'noUndAfterHundred' | 'million' }

export const bigNumbers: BigNumber[] = [
  { label: '101', word: 'hunderteins', noteKey: 'noUndAfterHundred' },
  { label: '111', word: 'hundertelf' },
  { label: '121', word: 'hunderteinundzwanzig' },
  { label: '200', word: 'zweihundert' },
  { label: '234', word: 'zweihundertvierunddreißig' },
  { label: '300', word: 'dreihundert' },
  { label: '500', word: 'fünfhundert' },
  { label: '600', word: 'sechshundert' },
  { label: '700', word: 'siebenhundert' },
  { label: '1.000', word: 'tausend' },
  { label: '1.021', word: 'eintausendeinundzwanzig' },
  { label: '1.234', word: 'eintausendzweihundertvierunddreißig' },
  { label: '10.000', word: 'zehntausend' },
  { label: '100.000', word: 'hunderttausend' },
  { label: '1.000.000', word: 'eine Million', noteKey: 'million' },
]
