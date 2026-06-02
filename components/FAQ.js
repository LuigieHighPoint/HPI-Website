import { useLang } from './LangContext'

export default function FAQ() {
  const { t } = useLang()
  return (
    <section className="sec" id="faq">
      <div className="sec-lbl">{t.faqLabel}</div>
      <h2 className="sec-ttl">{t.faqTitle}</h2>
      <p
        className="sec-sub"
        style={{ marginBottom: '3rem' }}
        dangerouslySetInnerHTML={{ __html: t.faqSub }}
      />
      <div className="faq-grid">
        {t.faqs.map((item, i) => (
          <div className="faq-item" key={i}>
            <h4>{item.q}</h4>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
