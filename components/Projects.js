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

      </div>
    </div>
  )
}
