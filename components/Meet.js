import { useLang } from './LangContext'

export default function Meet() {
  const { t } = useLang()
  return (
    <section className="meet" id="meet">
      <div className="meet-inner">
        <img src="/luigie.jpeg" alt="Luigie Rendon" className="meet-photo" />
        <div className="meet-content">
          <div className="sec-lbl" style={{ textAlign: 'left' }}>{t.meetLabel}</div>
          <div className="meet-name">{t.meetName}</div>
          <div className="meet-title">{t.meetTitle}</div>
          <p className="meet-bio">{t.meetBio}</p>
          <div className="meet-contact">
            <div className="mc">
              <div className="mc-dot">📞</div>
              <a href="tel:+19728027521">(972) 802-7521</a>
            </div>
            <div className="mc">
              <div className="mc-dot">✉️</div>
              <a href="mailto:luigie@highpointinvest.com">luigie@highpointinvest.com</a>
            </div>
            <div className="mc">
              <div className="mc-dot">🌐</div>
              <a href="https://highpointinvest.com" target="_blank" rel="noreferrer">highpointinvest.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
