import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { cheatCategories, type CheatCategory, type CheatPhrase } from './data'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './cheatsheet.css'

function categoryTitle(category: CheatCategory, locale: Locale): string {
  return locale === 'de' ? category.titleDe : locale === 'en' ? category.titleEn : category.titlePt
}

function phraseMeaning(phrase: CheatPhrase, locale: Locale): string {
  return locale === 'en' ? phrase.en : phrase.pt
}

export default function CheatSheet() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  const [categoryId, setCategoryId] = useState(cheatCategories[0].id)
  const activeCategory = useMemo(
    () => cheatCategories.find(c => c.id === categoryId) ?? cheatCategories[0],
    [categoryId],
  )

  return (
    <div className="screen-cheatsheet">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="cs-section">
        <span className="piece-label">{t.situationLabel}</span>
        <div className="chips">
          {cheatCategories.map(category => (
            <button
              key={category.id}
              className={category.id === categoryId ? 'chip active' : 'chip'}
              onClick={() => setCategoryId(category.id)}
            >
              {categoryTitle(category, locale)}
            </button>
          ))}
        </div>

        <div className="cs-phrase-grid">
          {activeCategory.phrases.map(p => (
            <div className="cs-phrase-card" key={p.id}>
              <span className="cs-phrase-de">{p.de}</span>
              <span className="cs-phrase-meaning">{phraseMeaning(p, locale)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
