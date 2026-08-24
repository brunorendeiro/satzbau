/** Hand-drawn flat-vector kitchen scene — a prototype for "click the object
 * in the picture, see its German name" instead of a plain word list. Each
 * shape's id matches an item id in data.ts's `kueche` room, so the vocabulary
 * itself stays single-sourced. */
export default function KitchenScene({ selectedItemId, onSelect }: { selectedItemId: string; onSelect: (id: string) => void }) {
  function cls(id: string) {
    return id === selectedItemId ? 'house-hotspot active' : 'house-hotspot'
  }

  return (
    <svg viewBox="0 0 400 220" className="house-scene-svg" role="group" aria-label="Küche">
      <rect x="0" y="196" width="400" height="24" className="house-scene-floor" />

      <g className={cls('kuehlschrank')} onClick={() => onSelect('kuehlschrank')} tabIndex={0} role="button" aria-label="Kühlschrank">
        <rect x="24" y="30" width="66" height="168" rx="8" />
        <line x1="24" y1="96" x2="90" y2="96" />
        <rect x="80" y="66" width="6" height="24" rx="3" className="house-scene-detail" />
        <rect x="80" y="126" width="6" height="24" rx="3" className="house-scene-detail" />
      </g>

      <g className={cls('herd')} onClick={() => onSelect('herd')} tabIndex={0} role="button" aria-label="Herd">
        <rect x="150" y="148" width="110" height="50" rx="6" />
        <circle cx="174" cy="158" r="9" className="house-scene-detail" />
        <circle cx="236" cy="158" r="9" className="house-scene-detail" />
        <circle cx="174" cy="182" r="9" className="house-scene-detail" />
        <circle cx="236" cy="182" r="9" className="house-scene-detail" />
      </g>

      <g className={cls('topf')} onClick={() => onSelect('topf')} tabIndex={0} role="button" aria-label="Topf">
        <rect x="158" y="112" width="34" height="26" rx="4" />
        <rect x="151" y="119" width="8" height="6" rx="2" className="house-scene-detail" />
        <rect x="193" y="119" width="8" height="6" rx="2" className="house-scene-detail" />
        <circle cx="175" cy="112" r="3.5" className="house-scene-detail" />
      </g>

      <g className={cls('pfanne')} onClick={() => onSelect('pfanne')} tabIndex={0} role="button" aria-label="Pfanne">
        <ellipse cx="222" cy="126" rx="19" ry="8" />
        <rect x="239" y="122" width="34" height="6" rx="3" />
      </g>

      <g className={cls('spuele')} onClick={() => onSelect('spuele')} tabIndex={0} role="button" aria-label="Spüle">
        <rect x="288" y="150" width="94" height="48" rx="6" />
        <rect x="306" y="160" width="58" height="26" rx="6" className="house-scene-detail" />
        <path d="M320 160 Q320 138 340 138 Q340 148 340 160" className="house-scene-faucet" />
      </g>
    </svg>
  )
}
