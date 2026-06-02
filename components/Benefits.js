import { useLang } from './LangContext'

export default function Benefits() {
  const { t } = useLang()
  return (
    <section className="sec" id="why-us">
      <div className="sec-lbl">{t.whyLabel}</div>
      <h2 className="sec-ttl">{t.whyTitle}</h2>
      <p className="sec-sub">{t.whySub}</p>
      <div className="bene-grid">
        {t.benefits.map((b, i) => (
          <div className="bene-card" key={i}>
            <div className="bene-icon">{b.icon}</div>
            <h4>{b.title}</h4>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
