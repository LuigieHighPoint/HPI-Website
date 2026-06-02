import { useLang } from './LangContext'

export default function Areas() {
  const { t } = useLang()
  return (
    <section className="areas">
      <div className="sec-lbl">{t.areasLabel}</div>
      <h2 className="sec-ttl">{t.areasTitle}</h2>
      <p className="sec-sub" style={{ marginBottom: '2.5rem' }}>{t.areasSub}</p>
      <div className="tags">
        {t.areas.map((area, i) => (
          <span className="tag" key={i}>{area}</span>
        ))}
      </div>
    </section>
  )
}
