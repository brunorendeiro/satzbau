import { useOutletContext } from 'react-router-dom'
import { multiplierGroups, genderRules, genderCategories, type MultiplierGroup, type MultiplierExample, type GenderRule, type GenderCategory } from './data'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './word-family.css'

function groupTitle(g: MultiplierGroup, locale: Locale): string {
  return locale === 'en' ? g.titleEn : locale === 'de' ? g.titleDe : g.titlePt
}

function groupDescription(g: MultiplierGroup, locale: Locale): string {
  return locale === 'en' ? g.descriptionEn : locale === 'de' ? g.descriptionDe : g.descriptionPt
}

type GenderCardProps = {
  label: string
  article: 'der' | 'die' | 'das'
  description: string
  examples: { word: string; meaningPt: string; meaningEn: string }[]
  locale: Locale
}

function GenderCard({ label, article, description, examples, locale }: GenderCardProps) {
  return (
    <div className="wf-gender-card">
      <div className="wf-gender-head">
        <span className="wf-gender-ending">{label}</span>
        <span className={`wf-gender-article article-${article}`}>{article}</span>
      </div>
      <p className="wf-gender-desc">{description}</p>
      <div className="wf-gender-examples">
        {examples.map(ex => (
          <span className="wf-gender-example" key={ex.word}>
            {ex.word} <span className="wf-gender-example-meaning">— {locale === 'en' ? ex.meaningEn : ex.meaningPt}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function GenderRuleCard({ rule, locale }: { rule: GenderRule; locale: Locale }) {
  const description = locale === 'en' ? rule.descriptionEn : locale === 'de' ? rule.descriptionDe : rule.descriptionPt
  return <GenderCard label={rule.ending} article={rule.article} description={description} examples={rule.examples} locale={locale} />
}

function GenderCategoryCard({ category, locale }: { category: GenderCategory; locale: Locale }) {
  const label = locale === 'en' ? category.labelEn : locale === 'de' ? category.labelDe : category.labelPt
  const description = locale === 'en' ? category.descriptionEn : locale === 'de' ? category.descriptionDe : category.descriptionPt
  return <GenderCard label={label} article={category.article} description={description} examples={category.examples} locale={locale} />
}

function ExampleCard({ example, affix, locale }: { example: MultiplierExample; affix: string; locale: Locale }) {
  const baseMeaning = locale === 'en' ? example.baseMeaningEn : example.baseMeaningPt
  const resultMeaning = locale === 'en' ? example.resultMeaningEn : example.resultMeaningPt
  return (
    <div className="wb-equation">
      <div className="wb-piece-col">
        <span className="wb-slot filled">{example.base}</span>
        <span className="wb-piece-caption">{baseMeaning}</span>
      </div>
      <span className="wb-op">+ {affix}</span>
      <div className="wb-piece-col">
        <span className="wb-result">{example.result}</span>
        <span className="wb-piece-caption">{resultMeaning}</span>
      </div>
    </div>
  )
}

export default function WordFamily() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  return (
    <div className="screen-word-family">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      {multiplierGroups.map(group => (
        <div className="wf-section" key={group.id}>
          <span className="piece-label">{groupTitle(group, locale)}</span>
          <p className="wf-section-note">{groupDescription(group, locale)}</p>
          <div className="wf-grid">
            {group.examples.map(example => (
              <ExampleCard key={example.id} example={example} affix={group.affix} locale={locale} />
            ))}
          </div>
        </div>
      ))}

      <div className="wf-section">
        <span className="piece-label">{t.sectionGenderLabel}</span>
        <p className="wf-section-note">{t.genderIntro}</p>
        <div className="wf-gender-grid">
          {genderRules.map(rule => <GenderRuleCard key={rule.id} rule={rule} locale={locale} />)}
        </div>
      </div>

      <div className="wf-section">
        <span className="piece-label">{t.sectionGenderMeaningLabel}</span>
        <p className="wf-section-note">{t.genderMeaningIntro}</p>
        <div className="wf-gender-grid">
          {genderCategories.map(category => <GenderCategoryCard key={category.id} category={category} locale={locale} />)}
        </div>
      </div>
    </div>
  )
}
