import { useLang } from './LangContext'

export default function Navbar({ activeTab, onTabChange }) {
  const { lang, t, toggle } = useLang()
  const isEs = lang === 'es'

  return (
    <>
      {/* Language Bar */}
      <div className="lang-bar">
        <div className="lang-toggle">
          <span className={`lang-label ${!isEs ? 'active' : 'inactive'}`} onClick={toggle}>EN</span>
          <div className={`lang-switch ${isEs ? 'es' : ''}`} onClick={toggle} />
          <span className={`lang-label ${isEs ? 'active' : 'inactive'}`} onClick={toggle}>ES</span>
        </div>
      </div>

      {/* Nav */}
      <nav>
        <img src="/logo-white.png" alt="High Point Investments LLC" className="nav-logo" />

        <div className="nav-tabs">
          <button
            className={`nav-tab ${activeTab === 'buyers' ? 'active' : ''}`}
            onClick={() => onTabChange('buyers')}
          >
            {t.tabBuyers}
          </button>
          <button
            className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => onTabChange('projects')}
          >
            {t.tabProjects}
          </button>
        </div>

        {activeTab === 'buyers' && (
          <ul className="nav-links">
            <li><a href="#how-it-works">{t.navHow}</a></li>
            <li><a href="#why-us">{t.navWhy}</a></li>
            <li><a href="#meet">{t.navAbout}</a></li>
            <li><a href="#faq">{t.navFaq}</a></li>
            <li><a href="#get-offer" className="nav-cta">{t.navCta}</a></li>
          </ul>
        )}
        {activeTab === 'projects' && <ul className="nav-links" />}
      </nav>
    </>
  )
}
