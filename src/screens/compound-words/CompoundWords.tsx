import { useOutletContext } from 'react-router-dom'
import { compoundWords } from './data'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './compound-words.css'

export default function CompoundWords() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  return (
    <div className="screen-compound-words">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="wb-list">
        {compoundWords.map(cw => (
          <div className="wb-card" key={cw.id}>
            <div className="wb-equation">
              <span className="wb-piece">{cw.part1.de}</span>
              <span className="wb-op">+</span>
              <span className="wb-piece">{cw.part2.de}</span>
              <span className="wb-op">=</span>
              <span className="wb-result">{cw.compound.de}</span>
            </div>
            <div className="wb-info">
              {locale !== 'en' && <span className="wb-info-row"><span className="wb-info-label">{t.literalLabel}</span> {cw.literalPt}</span>}
              {locale !== 'pt' && <span className="wb-info-row"><span className="wb-info-label">{t.literalLabel}</span> {cw.literalEn}</span>}
              {locale !== 'en' && <span className="wb-info-row"><span className="wb-info-label">{t.meaningLabel}</span> {cw.compound.pt}</span>}
              {locale !== 'pt' && <span className="wb-info-row"><span className="wb-info-label">{t.meaningLabel}</span> {cw.compound.en}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
