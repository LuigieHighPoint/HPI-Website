import { useState, useRef } from 'react'
import { useLang } from './LangContext'

export default function Compare() {
  const { t } = useLang()
  const [hover, setHover] = useState(null) // 'hp' | 'trad' | null
  const tableRef = useRef(null)

  const highlightStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '30%',
    pointerEvents: 'none',
    borderRadius: '2px 2px 0 0',
    transition: 'left 0.3s ease, border-color 0.3s ease, background 0.3s ease, opacity 0.25s ease',
    borderTop: '2px solid',
    borderLeft: '2px solid',
    borderRight: '2px solid',
    borderBottom: 'none',
    opacity: hover ? 1 : 0,
    left: hover === 'trad' ? '70%' : '40%',
    borderColor: hover === 'trad' ? '#e74c3c' : '#2ecc71',
    background: hover === 'trad' ? 'rgba(231,76,60,0.07)' : 'rgba(46,204,113,0.08)',
  }

  return (
    <section className="compare">
      <div className="sec-lbl" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.compareLabel}</div>
      <h2 className="sec-ttl">{t.compareTitle}</h2>
      <p className="sec-sub" style={{ marginBottom: '3rem' }}>{t.compareSub}</p>
      <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto' }}>
        {/* Sliding highlight box */}
        <div style={highlightStyle} />
        <table className="ctbl" ref={tableRef}>
          <thead>
            <tr>
              <th style={{ width: '40%', textAlign: 'left' }}>What matters</th>
              <th
                className="hpi hpi-h"
                style={{ width: '30%', color: hover === 'hp' ? '#2ecc71' : undefined, transition: 'color 0.2s' }}
                onMouseEnter={() => setHover('hp')}
                onMouseLeave={() => setHover(null)}
              >
                High Point Investments
              </th>
              <th
                style={{ width: '30%', color: hover === 'trad' ? '#e74c3c' : undefined, transition: 'color 0.2s' }}
                onMouseEnter={() => setHover('trad')}
                onMouseLeave={() => setHover(null)}
              >
                Traditional listing
              </th>
            </tr>
          </thead>
          <tbody>
            {t.compareRows.map(([label, hpi, trad], i) => (
              <tr key={i}>
                <td>{label}</td>
                <td
                  className={`hpi yes ${hover === 'hp' ? 'hover-green' : ''}`}
                  onMouseEnter={() => setHover('hp')}
                  onMouseLeave={() => setHover(null)}
                >
                  {hpi}
                </td>
                <td
                  className={`no ${hover === 'trad' ? 'hover-red' : ''}`}
                  onMouseEnter={() => setHover('trad')}
                  onMouseLeave={() => setHover(null)}
                >
                  {trad}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
