import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { alphabet, combos, practiceSurnames, vowelLengthPairs, type LetterEntry, type VowelLengthPair } from './data'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './alphabet.css'

const CORE_IDS = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])

function exampleMeaning(entry: LetterEntry, locale: Locale): string {
  return locale === 'en' ? entry.exampleEn : entry.examplePt
}

function LetterCard({ entry, trickyTag, locale }: { entry: LetterEntry; trickyTag: string; locale: Locale }) {
  return (
    <div className={entry.tricky ? 'letter-card tricky' : 'letter-card'}>
      <div className="letter-head">
        <span className="letter-big">{entry.letter}</span>
        <span className="letter-name">{entry.name}</span>
      </div>
      {entry.tricky && <span className="letter-tag">{trickyTag}</span>}
      <div className="letter-example">
        <span className="letter-example-word">{entry.example}</span>
        <span className="letter-example-meaning">{exampleMeaning(entry, locale)}</span>
      </div>
      <div className="letter-guide">
        <p><span className="letter-guide-label pt">PT</span>{entry.soundPt}</p>
        <p><span className="letter-guide-label en">EN</span>{entry.soundEn}</p>
      </div>
    </div>
  )
}

function VowelPairCard({ pair, locale, shortTag, longTag }: { pair: VowelLengthPair; locale: Locale; shortTag: string; longTag: string }) {
  const shortMeaning = locale === 'en' ? pair.shortMeaningEn : pair.shortMeaningPt
  const longMeaning = locale === 'en' ? pair.longMeaningEn : pair.longMeaningPt
  const rule = locale === 'en' ? pair.ruleEn : pair.rulePt
  return (
    <div className="vowel-pair-card">
      <div className="vowel-pair-words">
        <div className="vowel-pair-word short">
          <span className="vowel-pair-tag">{shortTag}</span>
          <span className="vowel-pair-german">{pair.shortWord}</span>
          <span className="vowel-pair-meaning">{shortMeaning}</span>
        </div>
        <div className="vowel-pair-word long">
          <span className="vowel-pair-tag">{longTag}</span>
          <span className="vowel-pair-german">{pair.longWord}</span>
          <span className="vowel-pair-meaning">{longMeaning}</span>
        </div>
      </div>
      <p className="vowel-pair-rule">{rule}</p>
    </div>
  )
}

export default function Alphabet() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]
  const [filter, setFilter] = useState<'all' | 'tricky'>('all')

  const shown = useMemo(() => filter === 'all' ? alphabet : alphabet.filter(l => l.tricky), [filter])
  const core = shown.filter(l => CORE_IDS.has(l.id))
  const extra = shown.filter(l => !CORE_IDS.has(l.id))
  const shownCombos = useMemo(() => filter === 'all' ? combos : combos.filter(c => c.tricky), [filter])

  return (
    <div className="screen-alphabet">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="chips alpha-filter">
        <button className={filter === 'all' ? 'chip active' : 'chip'} onClick={() => setFilter('all')}>{t.filterAll}</button>
        <button className={filter === 'tricky' ? 'chip active' : 'chip'} onClick={() => setFilter('tricky')}>{t.filterTricky}</button>
      </div>

      {core.length > 0 && (
        <div className="alpha-section">
          <span className="piece-label">{t.sectionAlphabet}</span>
          <div className="alpha-grid">
            {core.map(entry => <LetterCard key={entry.id} entry={entry} trickyTag={t.trickyTag} locale={locale} />)}
          </div>
        </div>
      )}

      {extra.length > 0 && (
        <div className="alpha-section">
          <span className="piece-label">{t.sectionExtra}</span>
          <div className="alpha-grid">
            {extra.map(entry => <LetterCard key={entry.id} entry={entry} trickyTag={t.trickyTag} locale={locale} />)}
          </div>
        </div>
      )}

      {shownCombos.length > 0 && (
        <div className="alpha-section">
          <span className="piece-label">{t.sectionCombos}</span>
          <p className="alpha-section-note">{t.combosIntro}</p>
          <div className="alpha-grid">
            {shownCombos.map(entry => <LetterCard key={entry.id} entry={entry} trickyTag={t.trickyTag} locale={locale} />)}
          </div>
        </div>
      )}

      <div className="alpha-section">
        <span className="piece-label">{t.sectionVowelLength}</span>
        <p className="alpha-section-note">{t.vowelLengthIntro}</p>
        <div className="vowel-grid">
          {vowelLengthPairs.map(pair => <VowelPairCard key={pair.id} pair={pair} locale={locale} shortTag={t.shortTag} longTag={t.longTag} />)}
        </div>
      </div>

      <div className="alpha-section">
        <span className="piece-label">{t.surnamesLabel}</span>
        <div className="chips alpha-surnames">
          {practiceSurnames.map(name => <span key={name} className="chip">{name}</span>)}
        </div>
      </div>
    </div>
  )
}
