import { useLang } from './LangContext'

const FOR_SALE = [
  {
    address: '6131 Inca Dr',
    cityState: 'Mabank, TX 75156',
    link: 'https://www.zillow.com/homedetails/6131-Inca-Dr-Mabank-TX-75156/216466057_zpid/',
    linkLabel: 'View on Zillow',
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
    linkLabel: 'View Listing',
    photo: '/709-e-11th-st.jpg',
  },
  {
    address: '106 Ute Trl',
    cityState: 'Mabank, TX 75156',
    link: 'https://www.realtor.com/realestateandhomes-detail/106-Ute-Trl_Mabank_TX_75156_M87068-02762',
    linkLabel: 'View Listing',
    photo: '/106-ute-trl.jpg',
  },
  {
    address: '3101 Townbluff Dr Apt 525',
    cityState: 'Plano, TX 75075',
    link: 'https://www.realtor.com/realestateandhomes-detail/3101-Townbluff-Dr-Apt-525_Plano_TX_75075_M70381-09827',
    linkLabel: 'View Listing',
    photo: '/3101-townbluff-dr.webp',
  },
  {
    address: '510 Williams St',
    cityState: 'Athens, TX 75751',
    link: 'https://www.realtor.com/realestateandhomes-detail/M7796641975',
    linkLabel: 'View Listing',
    photo: '/510-williams-st.jpg',
  },
]

function StatusBadge({ status }) {
  const colors = {
    'FOR SALE':    { bg: '#1a7a3c', color: '#fff' },
    'COMING SOON': { bg: '#a87c00', color: '#fff' },
    'SOLD':        { bg: '#a01010', color: '#fff' },
  }
  const s = colors[status] || {}
  return (
    <span className="proj-badge" style={{ background: s.bg, color: s.color }}>
      {status}
    </span>
  )
}

function PropertyCard({ address, cityState, link, linkLabel, status, photo }) {
  return (
    <div className="proj-card">
      <div className="proj-img" style={photo ? { backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
        <StatusBadge status={status} />
      </div>
      <div className="proj-body">
        <p className="proj-address">{address}</p>
        {cityState && <p className="proj-city">{cityState}</p>}
        {link && (
          <a className="proj-link" href={link} target="_blank" rel="noopener noreferrer">
            {linkLabel} →
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useLang()
  return (
    <div className="projects-page">
      <div className="projects-inner">

        <section className="proj-section">
          <h2 className="proj-section-title for-sale">For Sale</h2>
          <div className="proj-grid">
            {FOR_SALE.map((p, i) => <PropertyCard key={i} {...p} status="FOR SALE" />)}
          </div>
        </section>

        <section className="proj-section">
          <h2 className="proj-section-title coming-soon">Coming Soon</h2>
          <div className="proj-grid">
            {COMING_SOON.map((p, i) => <PropertyCard key={i} {...p} status="COMING SOON" />)}
          </div>
        </section>

        <section className="proj-section">
          <h2 className="proj-section-title sold">Sold</h2>
          <div className="proj-grid">
            {SOLD.map((p, i) => <PropertyCard key={i} {...p} status="SOLD" />)}
          </div>
        </section>

        {/* Bottom sections — no gap between them */}
        <div className="proj-why-wrapper">

          {/* White section — expertise cards */}
          <div className="proj-why">
            <p className="sec-label proj-why-label">Why work with me</p>
            <h2 className="proj-why-title">New Construction & Fix and Flip Expert</h2>
            <p className="proj-why-sub">I don't just buy homes — I build and transform them. Every project you see here is a result of hands-on work, local market knowledge, and a commitment to quality.</p>
            <div className="proj-why-grid">
              <div className="proj-why-card">
                <div className="proj-why-icon">🏗️</div>
                <h3>New Construction</h3>
                <p>From the ground up, I develop new homes built to modern standards across the DFW area — delivering quality builds that last.</p>
              </div>
              <div className="proj-why-card">
                <div className="proj-why-icon">🔨</div>
                <h3>Fix & Flip</h3>
                <p>I buy distressed properties, renovate them fully, and bring them back to life — adding value to neighborhoods across DFW.</p>
              </div>
              <div className="proj-why-card">
                <div className="proj-why-icon">📄</div>
                <h3>Note Investing</h3>
                <p>I buy and sell real estate notes — giving sellers a fast exit on their loans and offering investors steady, secured returns.</p>
              </div>
            </div>
          </div>

          {/* Navy section — 6 steps */}
          <div className="proj-fullservice">
            <h3 className="proj-fullservice-title">I guide you through every step</h3>
            <p className="proj-fullservice-sub">From finding the property to selling it, I handle the entire process so you don't have to figure it out alone.</p>
            <div className="proj-steps">
              <div className="proj-step"><div className="proj-step-num">1</div><div><h4>Find What Best Fits Your Needs</h4><p>Every investor is different. I'll sit down with you, understand your goals, and find the strategy that works best for your situation.</p></div></div>
              <div className="proj-step"><div className="proj-step-num">2</div><div><h4>Find the Land or Home</h4><p>I help you identify and acquire the right property — land or existing home — at the right price.</p></div></div>
              <div className="proj-step"><div className="proj-step-num">3</div><div><h4>Secure the Financing</h4><p>I connect you with the right lenders and financing options to get your project funded fast.</p></div></div>
              <div className="proj-step"><div className="proj-step-num">4</div><div><h4>Contractors & Supply Stores</h4><p>I put you in contract with my trusted contractors and supply stores — the same ones I use on my own projects.</p></div></div>
              <div className="proj-step"><div className="proj-step-num">5</div><div><h4>Manage & Guide the Build</h4><p>I stay involved throughout the process — managing timelines, solving problems, and keeping the project on track.</p></div></div>
              <div className="proj-step"><div className="proj-step-num">6</div><div><h4>List & Market for Sale</h4><p>When it's ready, I list and market the property to get you maximum exposure and the best possible return.</p></div></div>
            </div>
          </div>

          {/* Light blue section — about */}
          <div className="proj-about" id="proj-about">
            <img src="/luigie.jpeg" alt="Luigie Rendon" className="proj-about-photo" />
            <div className="proj-about-content">
              <p className="proj-why-label">Your local investor</p>
              <h2 className="proj-about-name">Luigie Rendon</h2>
              <p className="proj-about-title">Real Estate Investor · High Point Investments LLC</p>
              <p className="proj-about-bio">As the Founder of High Point Investments LLC, I work closely with property owners looking to sell distressed properties and help investors identify value-add opportunities. My experience includes acquiring and renovating homes through fix-and-flip projects, as well as developing single-family homes through new construction projects.</p>
              <div className="meet-contact">
                <div className="mc"><div className="mc-dot">📞</div><a href="tel:+19728027521">(972) 802-7521</a></div>
                <div className="mc"><div className="mc-dot">✉️</div><a href="mailto:luigie@highpointinvest.com">luigie@highpointinvest.com</a></div>
                <div className="mc"><div className="mc-dot">🌐</div><a href="https://highpointinvest.com" target="_blank" rel="noreferrer">highpointinvest.com</a></div>
              </div>
            </div>
          </div>

        </div>{/* end proj-why-wrapper */}

      </div>
    </div>
  )
}
