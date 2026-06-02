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
        <div>
          <img src="/logo-white.png" alt="High Point Investments LLC" className="foot-logo" />
          <p className="foot-tagline">
            {taglineLines[0]}<br />{taglineLines[1]}
          </p>
        </div>
        <div className="foot-col">
          <h5>Navigate</h5>
          <ul>
            <li><a href="#how-it-works">{t.navHow}</a></li>
            <li><a href="#why-us">{t.navWhy}</a></li>
            <li><a href="#meet">{t.navAbout}</a></li>
            <li><a href="#faq">{t.navFaq}</a></li>
            <li><a href="#get-offer">{t.navCta}</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>We help with</h5>
          <ul>
            <li><a href="#">Foreclosure</a></li>
            <li><a href="#">Probate / inherited homes</a></li>
            <li><a href="#">Divorce sales</a></li>
            <li><a href="#">Distressed properties</a></li>
            <li><a href="#">Tired landlords</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="tel:+19728027521">(972) 802-7521</a></li>
            <li><a href="mailto:luigie@highpointinvest.com">luigie@highpointinvest.com</a></li>
            <li><a href="https://highpointinvest.com">highpointinvest.com</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bot">
        <span className="foot-copy">© 2026 High Point Investments LLC. All rights reserved.</span>
        <a href="https://highpointinvest.com" className="foot-url">highpointinvest.com</a>
      </div>
    </footer>
  )
}
