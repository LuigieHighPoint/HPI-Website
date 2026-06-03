import { useLang } from './LangContext'

const FOR_SALE = [
  {
    address: '6131 Inca Dr',
    cityState: 'Mabank, TX 75156',
    link: 'https://www.zillow.com/homedetails/6131-Inca-Dr-Mabank-TX-75156/216466057_zpid/',
    labelKey: 'projViewZillow',
    photo: '/6131-inca-dr.jpg',
  },
]

const COMING_SOON = [
  { address: '102 Goodknight Ranch Rd', cityState: 'Trinidad, TX 75163' },
  { address: '104 Goodknight Ranch Rd', cityState: 'Trinidad, TX 75163' },
  { address: '712 E 10th St', cityState: 'Kemp, TX 75143' },
]

const SOLD = [
  {
    address: '709 E 11th St',
    cityState: 'Kemp, TX 75143',
    link: 'https://www.realtor.com/realestateandhomes-detail/709-E-11th-St_Kemp_TX_75143_M85122-21717',
    labelKey: 'projViewListing',
    photo: '/709-e-11th-st.jpg',
  },
  {
    address: '106 Ute Trl',
    cityState: 'Mabank, TX 75156',
    link: 'https://www.realtor.com/realestateandhomes-detail/106-Ute-Trl_Mabank_TX_75156_M87068-02762',
    labelKey: 'projViewListing',
    photo: '/106-ute-trl.jpg',
  },
  {
    address: '3101 Townbluff Dr Apt 525',
    cityState: 'Plano, TX 75075',
    link: 'https://www.realtor.com/realestateandhomes-detail/3101-Townbluff-Dr-Apt-525_Plano_TX_75075_M70381-09827',
    labelKey: 'projViewListing',
    photo: '/3101-townbluff-dr.webp',
  },
  {
    address: '510 Williams St',
    cityState: 'Athens, TX 75751',
    link: 'https://www.realtor.com/realestateandhomes-detail/M7796641975',
    labelKey: 'projViewListing',
    photo: '/510-williams-st.jpg',
  },
]

function StatusBadge({ label }) {
  const isForSale = label.includes('SALE') || label.includes('VENTA')
  const isComingSoon = label.includes('COMING') || label.includes('PRÓXIMAMENTE') || label.includes('PROXIMAMENTE')
  const isSold = label.includes('SOLD') || label.includes('VENDIDO')
  const bg = isForSale ? '#1a7a3c' : isComingSoon ? '#a87c00' : isSold ? '#a01010' : '#444'
  return (
    <span className="proj-badge" style={{ background: bg, color: '#fff' }}>
      {label}
    </span>
  )
}

function PropertyCard({ address, cityState, link, labelKey, status, photo, t }) {
  const linkLabel = t[labelKey]
  const cardInner = (
    <>
      <div className="proj-img" style={photo ? { backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
        <StatusBadge label={status} />
      </div>
      <div className="proj-body">
        <p className="proj-address">{address}</p>
        {cityState && <p className="proj-city">{cityState}</p>}
        {link && <span className="proj-link">{linkLabel} →</span>}
      </div>
    </>
  )
  return link ? (
    <a className="proj-card proj-card-link" href={link} target="_blank" rel="noopener noreferrer">
      {cardInner}
    </a>
  ) : (
    <div className="proj-card">{cardInner}</div>
  )
}

export default function Projects() {
  const { t } = useLang()
  const icons = ['🏗️', '🔨', '📄']

  return (
    <div className="projects-page">
      <div className="projects-inner">

        <section className="proj-section">
          <h2 className="proj-section-title for-sale">{t.projForSale}</h2>
          <div className="proj-grid">
            {FOR_SALE.map((p, i) => <PropertyCard key={i} {...p} status={t.projStatusForSale} t={t} />)}
          </div>
        </section>

        <section className="proj-section">
          <h2 className="proj-section-title coming-soon">{t.projComingSoon}</h2>
          <div className="proj-grid">
            {COMING_SOON.map((p, i) => <PropertyCard key={i} {...p} status={t.projStatusComingSoon} t={t} />)}
          </div>
        </section>

        <section className="proj-section">
          <h2 className="proj-section-title sold">{t.projSold}</h2>
          <div className="proj-grid">
            {SOLD.map((p, i) => <PropertyCard key={i} {...p} status={t.projStatusSold} t={t} />)}
          </div>
        </section>

        {/* Bottom sections */}
        <div className="proj-why-wrapper">

          {/* White section — expertise cards */}
          <div className="proj-why">
            <p className="sec-label proj-why-label">{t.projWhyLabel}</p>
            <h2 className="proj-why-title">{t.projWhyTitle}</h2>
            <p className="proj-why-sub">{t.projWhySub}</p>
            <div className="proj-why-grid">
              {t.projCards.map((card, i) => (
                <div className="proj-why-card" key={i}>
                  <div className="proj-why-icon">{icons[i]}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navy section — 6 steps */}
          <div className="proj-fullservice">
            <h3 className="proj-fullservice-title">{t.projStepsTitle}</h3>
            <p className="proj-fullservice-sub">{t.projStepsSub}</p>
            <div className="proj-steps">
              {t.projSteps.map((step, i) => (
                <div className="proj-step" key={i}>
                  <div className="proj-step-num">{i + 1}</div>
                  <div><h4>{step.title}</h4><p>{step.desc}</p></div>
                </div>
              ))}
            </div>
          </div>

          {/* Light blue section — about */}
          <div className="proj-about" id="proj-about">
            <img src="/luigie.jpeg" alt="Luigie Rendon" className="proj-about-photo" />
            <div className="proj-about-content">
              <p className="proj-why-label">{t.projAboutLabel}</p>
              <h2 className="proj-about-name">Luigie Rendon</h2>
              <p className="proj-about-title">{t.projAboutTitle}</p>
              <p className="proj-about-bio">{t.projAboutBio}</p>
              <div className="meet-contact">
                <div className="mc"><div className="mc-dot">📞</div><a href="tel:+19728027521">(972) 802-7521</a></div>
                <div className="mc"><div className="mc-dot">✉️</div><a href="mailto:luigie@highpointinvest.com">luigie@highpointinvest.com</a></div>
                <div className="mc"><div className="mc-dot">🌐</div><a href="https://highpointinvest.com" target="_blank" rel="noreferrer">highpointinvest.com</a></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
