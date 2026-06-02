import { useLang } from './LangContext'

export default function Testimonials() {
  const { t } = useLang()
  return (
    <section className="testi">
      <div className="sec-lbl">{t.testiLabel}</div>
      <h2 className="sec-ttl">{t.testiTitle}</h2>
      <p className="sec-sub" style={{ marginBottom: '3rem' }}>{t.testiSub}</p>
      <div className="testi-grid">
        {t.testimonials.map((item, i) => (
          <div className="tc-card" key={i}>
            <div className="stars">★★★★★</div>
            <blockquote>"{item.text}"</blockquote>
            <div className="reviewer">
              <div className="av">{item.initials}</div>
              <div>
                <strong>{item.name}</strong>
                <span>{item.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
