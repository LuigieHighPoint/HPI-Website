import { useLang } from './LangContext'

export function CTA() {
  const { t } = useLang()
  return (
    <section className="cta-sec">
      <div className="sec-lbl" style={{ display: 'block', textAlign: 'center' }}>{t.ctaLabel}</div>
      <h2 className="sec-ttl">{t.ctaTitle}</h2>
      <p className="sec-sub">{t.ctaSub}</p>
      <a href="tel:+19728027521" className="cta-phone">(972) 802-7521</a>
      <span className="cta-phone-lbl">{t.ctaPhoneLbl}</span>
      <a href="#get-offer" className="btn-gold" style={{ display: 'inline-block' }}>{t.ctaBtn}</a>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()
  const taglineLines = t.footTagline.split('\n')
  return (
    <footer>
      <div className="foot-top">
        <div className="foot-brand">
          <img src="/logo-white.png" alt="High Point Investments LLC" className="foot-logo" />
        </div>
        <div className="foot-contact-inline">
          <a href="tel:+19728027521">(972) 802-7521</a>
          <span className="foot-divider">·</span>
          <a href="mailto:luigie@highpointinvest.com">luigie@highpointinvest.com</a>
          <span className="foot-divider">·</span>
          <a href="https://highpointinvest.com">highpointinvest.com</a>
        </div>
      </div>
      <div className="foot-bot">
        <span className="foot-copy">© 2026 High Point Investments LLC. All rights reserved.</span>
        <a href="https://highpointinvest.com" className="foot-url">highpointinvest.com</a>
      </div>
    </footer>
  )
}
