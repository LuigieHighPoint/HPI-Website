import { useState, useEffect, useRef } from 'react'
import { useLang } from './LangContext'

export default function Navbar({ activeTab, onTabChange, basePath = '' }) {
  const { lang, t, toggle } = useLang()
  const isEs = lang === 'es'
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

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
        <a href="/"><img src="/logo-white.png" alt="High Point Investments LLC" className="nav-logo" /></a>

        <div className="nav-tabs">
          <button
            className={`nav-tab ${activeTab === 'buyers' ? 'active' : ''}`}
            onClick={() => { onTabChange('buyers'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            {t.tabBuyers}
          </button>
          <button
            className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => { onTabChange('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            {t.tabProjects}
          </button>
        </div>

        {activeTab === 'buyers' && (
          <ul className="nav-links">
            <li><a href={basePath + '#how-it-works'}>{t.navHow}</a></li>
            <li><a href={basePath + '#why-us'}>{t.navWhy}</a></li>
            <li><a href={basePath + '#meet'}>{t.navAbout}</a></li>
            <li><a href={basePath + '#faq'}>{t.navFaq}</a></li>
            <li className="nav-dropdown-wrap" ref={dropRef}>
              <button
                className="nav-dropdown-trigger"
                onClick={() => setDropOpen(o => !o)}
              >
                Privacy Policy ▾
              </button>
              {dropOpen && (
                <ul className="nav-dropdown">
                  <li><a href="/privacy-policy" onClick={() => setDropOpen(false)}>Privacy Policy</a></li>
                  <li><a href="/sms-consent" onClick={() => setDropOpen(false)}>SMS Consent</a></li>
                </ul>
              )}
            </li>
            <li><a href={basePath + '#get-offer'} className="nav-cta">{t.navCta}</a></li>
          </ul>
        )}
        {activeTab === 'projects' && (
          <ul className="nav-links">
            <li>
              <button className="nav-cta" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                onClick={() => {
                  const el = document.querySelector('.proj-about')
                  if (!el) return
                  const top = el.getBoundingClientRect().top + window.scrollY
                  const offset = top - (window.innerHeight / 2 - el.offsetHeight / 2)
                  window.scrollTo({ top: offset, behavior: 'smooth' })
                }}>
                {t.projContactMe}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}
