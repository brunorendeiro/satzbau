import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { compoundWords, type WordPiece } from './data'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './compound-words.css'

function uniqueByDe(pieces: WordPiece[]): WordPiece[] {
  return Array.from(new Map(pieces.map(p => [p.de, p])).values())
}

export default function CompoundWords() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  const [part1De, setPart1De] = useState<string | null>(null)
  const [part2De, setPart2De] = useState<string | null>(null)
  const [discovered, setDiscovered] = useState<Set<string>>(new Set())

  const allPart1 = useMemo(() => uniqueByDe(compoundWords.map(cw => cw.part1)), [])
  const availablePart2 = useMemo(
    () => part1De ? uniqueByDe(compoundWords.filter(cw => cw.part1.de === part1De).map(cw => cw.part2)) : [],
    [part1De],
  )
  const match = useMemo(
    () => compoundWords.find(cw => cw.part1.de === part1De && cw.part2.de === part2De) ?? null,
    [part1De, part2De],
  )

  function pickPart1(de: string) {
    setPart1De(de)
    setPart2De(null)
  }

  function pickPart2(de: string) {
    setPart2De(de)
    const found = compoundWords.find(cw => cw.part1.de === part1De && cw.part2.de === de)
    if (found) setDiscovered(prev => new Set(prev).add(found.id))
  }

  function reset() {
    setPart1De(null)
    setPart2De(null)
  }

  return (
    <div className="screen-compound-words">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="wb-builder">
        <div className="wb-equation">
          <span className={part1De ? 'wb-slot filled' : 'wb-slot'}>{part1De ?? '?'}</span>
          <span className="wb-op">+</span>
          <span className={part2De ? 'wb-slot filled' : 'wb-slot'}>{part2De ?? '?'}</span>
          <span className="wb-op">=</span>
          <span className={match ? 'wb-result' : 'wb-result placeholder'}>{match ? match.compound.de : '?'}</span>
        </div>

        {match ? (
          <div className="wb-info">
            {locale !== 'en' && <span className="wb-info-row"><span className="wb-info-label">{t.literalLabel}</span> {match.literalPt}</span>}
            {locale !== 'pt' && <span className="wb-info-row"><span className="wb-info-label">{t.literalLabel}</span> {match.literalEn}</span>}
            {locale !== 'en' && <span className="wb-info-row"><span className="wb-info-label">{t.meaningLabel}</span> {match.compound.pt}</span>}
            {locale !== 'pt' && <span className="wb-info-row"><span className="wb-info-label">{t.meaningLabel}</span> {match.compound.en}</span>}
          </div>
        ) : (
          <p className="wb-hint">{!part1De ? t.pickPart1Hint : t.pickPart2Hint}</p>
        )}
      </div>

      <div className="pieces">
        <div className="piece-group">
          <span className="piece-label">{t.part1Label}</span>
          <div className="chips">
            {allPart1.map(p => (
              <button key={p.de} className={p.de === part1De ? 'chip active' : 'chip'} onClick={() => pickPart1(p.de)}>
                {p.de}
              </button>
            ))}
          </div>
        </div>

        <div className="piece-group">
          <span className="piece-label">{t.part2Label}</span>
          <div className="chips">
            {availablePart2.length === 0 && <span className="wb-hint">{t.pickPart1Hint}</span>}
            {availablePart2.map(p => (
              <button key={p.de} className={p.de === part2De ? 'chip active' : 'chip'} onClick={() => pickPart2(p.de)}>
                {p.de}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className="restart" onClick={reset}>{t.resetLabel}</button>

      <div className="wb-progress">
        <span className="wb-progress-label">{t.progressLabel(discovered.size, compoundWords.length)}</span>
        <div className="wb-progress-chips">
          {compoundWords.map(cw => (
            <span key={cw.id} className={discovered.has(cw.id) ? 'wb-progress-chip found' : 'wb-progress-chip'}>
              {discovered.has(cw.id) ? cw.compound.de : '?'}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
