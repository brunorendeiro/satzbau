import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { rooms, type Room } from './data'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './house.css'

function roomLabel(room: Room, locale: Locale): string {
  return locale === 'en' ? room.labelEn : locale === 'de' ? room.labelDe : room.labelPt
}

export default function House() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]
  const [selectedId, setSelectedId] = useState(rooms[0].id)

  const selected = useMemo(() => rooms.find(r => r.id === selectedId)!, [selectedId])

  return (
    <div className="screen-house">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="house-plan">
        <div className="house-roof" />
        <div className="house-grid">
          {rooms.map(room => (
            <button
              key={room.id}
              className={room.id === selectedId ? `house-room room-${room.id} active` : `house-room room-${room.id}`}
              style={{ gridArea: room.gridArea }}
              onClick={() => setSelectedId(room.id)}
            >
              {roomLabel(room, locale)}
            </button>
          ))}
        </div>
      </div>

      <div className="house-items">
        <span className="piece-label">{roomLabel(selected, locale)} — {t.itemsLabel}</span>
        <div className="house-item-grid">
          {selected.items.map(item => (
            <div className="house-item-card" key={item.id}>
              <span className="house-item-de">{item.de}</span>
              <span className="house-item-meaning">{locale === 'en' ? item.en : item.pt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
