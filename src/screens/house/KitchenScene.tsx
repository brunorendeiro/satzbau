/** Illustrated cartoon kitchen scene — click the object in the picture to see
 * its German name. Each shape's id matches an item id in data.ts's `kueche`
 * room, so the vocabulary itself stays single-sourced. */
const INK = '#2f2a3a'

export default function KitchenScene({ selectedItemId, onSelect }: { selectedItemId: string; onSelect: (id: string) => void }) {
  function cls(id: string) {
    return id === selectedItemId ? 'house-hotspot active' : 'house-hotspot'
  }

  return (
    <svg viewBox="0 0 400 220" className="house-scene-svg" role="group" aria-label="Küche">
      <defs>
        <linearGradient id="kitchenWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff6e6" />
          <stop offset="100%" stopColor="#ffe3ae" />
        </linearGradient>
        <linearGradient id="kitchenFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d9a066" />
          <stop offset="100%" stopColor="#b97b4a" />
        </linearGradient>
        <linearGradient id="kitchenSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfe6ff" />
          <stop offset="100%" stopColor="#eaf7ff" />
        </linearGradient>
        <linearGradient id="fridgeBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbe6ee" />
        </linearGradient>
        <linearGradient id="silverGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f6f8" />
          <stop offset="100%" stopColor="#b9c1c9" />
        </linearGradient>
        <linearGradient id="stoveGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#565b66" />
          <stop offset="100%" stopColor="#23262c" />
        </linearGradient>
        <radialGradient id="burnerGlow" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffe27a" />
          <stop offset="45%" stopColor="#ff9d3d" />
          <stop offset="100%" stopColor="#b3401b" />
        </radialGradient>
        <linearGradient id="potGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff7a63" />
          <stop offset="100%" stopColor="#d9402a" />
        </linearGradient>
        <linearGradient id="panGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a6e77" />
          <stop offset="100%" stopColor="#33363c" />
        </linearGradient>
        <linearGradient id="woodGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c98a4b" />
          <stop offset="100%" stopColor="#9c6631" />
        </linearGradient>
        <linearGradient id="cabinetGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffaf0" />
          <stop offset="100%" stopColor="#e9dcc4" />
        </linearGradient>
        <linearGradient id="clockFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffdf7" />
          <stop offset="100%" stopColor="#f3e9d2" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="400" height="196" fill="url(#kitchenWall)" />
      <rect x="0" y="196" width="400" height="24" fill="url(#kitchenFloor)" />
      <g stroke="#a06a3c" strokeWidth="1" opacity="0.5">
        <line x1="40" y1="196" x2="40" y2="220" />
        <line x1="120" y1="196" x2="120" y2="220" />
        <line x1="200" y1="196" x2="200" y2="220" />
        <line x1="280" y1="196" x2="280" y2="220" />
        <line x1="360" y1="196" x2="360" y2="220" />
      </g>

      {/* Kühlschrank */}
      <g
        className={cls('kuehlschrank')}
        onClick={() => onSelect('kuehlschrank')}
        tabIndex={0}
        role="button"
        aria-label="Kühlschrank"
      >
        <rect x="22" y="26" width="70" height="172" rx="16" fill="url(#fridgeBody)" stroke={INK} strokeWidth="3" />
        <line x1="22" y1="92" x2="92" y2="92" stroke={INK} strokeWidth="3" />
        <rect x="81" y="46" width="7" height="30" rx="3.5" fill="url(#silverGrad)" stroke={INK} strokeWidth="1.5" />
        <rect x="81" y="118" width="7" height="34" rx="3.5" fill="url(#silverGrad)" stroke={INK} strokeWidth="1.5" />
        <path d="M30 34 L44 34 L34 88 L26 88 Z" fill="#ffffff" opacity="0.35" />
      </g>

      {/* Uhr */}
      <g className={cls('uhr')} onClick={() => onSelect('uhr')} tabIndex={0} role="button" aria-label="Uhr">
        <circle cx="121" cy="63" r="20" fill="url(#clockFace)" stroke={INK} strokeWidth="3" />
        <rect x="117" y="40" width="8" height="5" rx="1.5" fill={INK} />
        <line x1="121" y1="47" x2="121" y2="51" stroke={INK} strokeWidth="1.5" />
        <line x1="121" y1="75" x2="121" y2="79" stroke={INK} strokeWidth="1.5" />
        <line x1="97" y1="63" x2="101" y2="63" stroke={INK} strokeWidth="1.5" />
        <line x1="141" y1="63" x2="145" y2="63" stroke={INK} strokeWidth="1.5" />
        <line x1="121" y1="63" x2="121" y2="50" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        <line x1="121" y1="63" x2="130" y2="57" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        <circle cx="121" cy="63" r="2" fill={INK} />
      </g>

      {/* Fenster */}
      <g className={cls('fenster')} onClick={() => onSelect('fenster')} tabIndex={0} role="button" aria-label="Fenster">
        <rect x="150" y="14" width="100" height="54" rx="6" fill="#8a5a34" stroke={INK} strokeWidth="2" />
        <rect x="156" y="20" width="88" height="42" rx="3" fill="url(#kitchenSky)" />
        <circle cx="180" cy="33" r="7" fill="#ffe27a" opacity="0.9" />
        <path d="M203 45 q7 -9 14 0 q7 -7 14 0 q-3 7 -14 7 q-11 0 -14 -7 Z" fill="#ffffff" opacity="0.85" />
        <line x1="200" y1="20" x2="200" y2="62" stroke="#8a5a34" strokeWidth="3" />
        <line x1="156" y1="41" x2="244" y2="41" stroke="#8a5a34" strokeWidth="3" />
      </g>

      {/* Dunstabzugshaube */}
      <g
        className={cls('dunstabzugshaube')}
        onClick={() => onSelect('dunstabzugshaube')}
        tabIndex={0}
        role="button"
        aria-label="Dunstabzugshaube"
      >
        <rect x="195" y="68" width="10" height="8" fill="url(#silverGrad)" stroke={INK} strokeWidth="1.5" />
        <path d="M170 76 L230 76 L222 98 L178 98 Z" fill="url(#silverGrad)" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <line x1="182" y1="88" x2="218" y2="88" stroke={INK} strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* Küchenschrank + Mikrowelle (built into the same upper cabinet run) */}
      <rect x="286" y="70" width="96" height="64" rx="8" fill="url(#woodGrad)" stroke={INK} strokeWidth="2" aria-hidden="true" pointerEvents="none" />
      <g
        className={cls('kuechenschrank')}
        onClick={() => onSelect('kuechenschrank')}
        tabIndex={0}
        role="button"
        aria-label="Küchenschrank"
      >
        <rect x="290" y="74" width="40" height="56" rx="4" fill="url(#cabinetGrad)" stroke={INK} strokeWidth="2.5" />
        <circle cx="322" cy="102" r="3" fill="url(#silverGrad)" stroke={INK} strokeWidth="1" />
      </g>
      <g className={cls('mikrowelle')} onClick={() => onSelect('mikrowelle')} tabIndex={0} role="button" aria-label="Mikrowelle">
        <rect x="334" y="74" width="48" height="56" rx="4" fill="url(#stoveGrad)" stroke={INK} strokeWidth="2.5" />
        <rect x="340" y="80" width="28" height="30" rx="3" fill="#1c1e22" stroke={INK} strokeWidth="1.5" />
        <circle cx="354" cy="95" r="8" fill="none" stroke="url(#silverGrad)" strokeWidth="1.5" />
        <rect x="372" y="80" width="6" height="30" rx="2" fill="url(#silverGrad)" />
        <circle cx="375" cy="87" r="1.4" fill={INK} />
        <circle cx="375" cy="94" r="1.4" fill={INK} />
      </g>

      {/* Herd */}
      <g className={cls('herd')} onClick={() => onSelect('herd')} tabIndex={0} role="button" aria-label="Herd">
        <rect x="148" y="146" width="114" height="54" rx="12" fill="url(#stoveGrad)" stroke={INK} strokeWidth="3" />
        <circle cx="174" cy="158" r="10" fill="url(#burnerGlow)" stroke="#1c1e22" strokeWidth="2" />
        <circle cx="236" cy="158" r="10" fill="url(#burnerGlow)" stroke="#1c1e22" strokeWidth="2" />
        <circle cx="174" cy="182" r="10" fill="url(#burnerGlow)" stroke="#1c1e22" strokeWidth="2" />
        <circle cx="236" cy="182" r="10" fill="url(#burnerGlow)" stroke="#1c1e22" strokeWidth="2" />
        <rect x="168" y="192" width="8" height="6" rx="2" fill="url(#silverGrad)" />
        <rect x="201" y="192" width="8" height="6" rx="2" fill="url(#silverGrad)" />
        <rect x="234" y="192" width="8" height="6" rx="2" fill="url(#silverGrad)" />
      </g>

      {/* Topf */}
      <g className={cls('topf')} onClick={() => onSelect('topf')} tabIndex={0} role="button" aria-label="Topf">
        <g className="kitchen-steam" opacity="0.6">
          <path d="M168 96 q4 -8 0 -16" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M182 96 q4 -8 0 -16" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </g>
        <ellipse cx="175" cy="108" rx="19" ry="6" fill="url(#potGrad)" stroke={INK} strokeWidth="3" />
        <rect x="156" y="108" width="38" height="26" rx="7" fill="url(#potGrad)" stroke={INK} strokeWidth="3" />
        <rect x="148" y="115" width="10" height="7" rx="3" fill={INK} />
        <rect x="196" y="115" width="10" height="7" rx="3" fill={INK} />
        <circle cx="175" cy="104" r="3.5" fill="url(#silverGrad)" stroke={INK} strokeWidth="1" />
      </g>

      {/* Pfanne */}
      <g className={cls('pfanne')} onClick={() => onSelect('pfanne')} tabIndex={0} role="button" aria-label="Pfanne">
        <rect x="240" y="120" width="36" height="7" rx="3.5" fill="url(#woodGrad)" stroke={INK} strokeWidth="2" />
        <ellipse cx="222" cy="124" rx="20" ry="9" fill="url(#panGrad)" stroke={INK} strokeWidth="3" />
        <ellipse cx="222" cy="124" rx="14" ry="5.5" fill="#3d3a42" />
        <ellipse cx="218" cy="123" rx="8" ry="5" fill="#ffffff" />
        <circle cx="221" cy="123" r="3" fill="#ffcf4d" stroke="#e0a72e" strokeWidth="1" />
      </g>

      {/* Spüle */}
      <g className={cls('spuele')} onClick={() => onSelect('spuele')} tabIndex={0} role="button" aria-label="Spüle">
        <rect x="286" y="148" width="96" height="50" rx="12" fill="url(#silverGrad)" stroke={INK} strokeWidth="3" />
        <rect x="304" y="158" width="60" height="28" rx="8" fill="#8f97a1" stroke={INK} strokeWidth="2" />
        <path d="M320 158 Q320 132 342 132 Q342 146 342 158" fill="none" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        <path d="M320 158 Q320 132 342 132 Q342 146 342 158" fill="none" stroke="url(#silverGrad)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="308" cy="154" r="3" fill="url(#silverGrad)" stroke={INK} strokeWidth="1" />
      </g>
    </svg>
  )
}
