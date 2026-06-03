import { useState } from 'react'
import { useLang } from './LangContext'

export default function Hero() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [btnText, setBtnText] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    setLoading(true)
    setBtnText('Sending…')

    try {
      const res = await fetch('https://formspree.io/f/xpqeaaje', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setBtnText('Error — try again')
        setLoading(false)
      }
    } catch {
      setBtnText('Error — try again')
      setLoading(false)
    }
  }

  return (
    <section className="hero">
      {/* Left */}
      <div className="hero-left">
        <span className="hero-badge">{t.badge}</span>
        <h1>
          {t.h1Line1}<br />
          {t.h1Line2} <span className="cash-word">{t.h1Cash}</span>.<br />
          {t.h1Line3}
        </h1>
        <p className="hero-lead">{t.lead}</p>
        <div className="hero-btns">
          <a href="#get-offer" className="btn-gold">{t.btn1}</a>
          <a href="#how-it-works" className="btn-ghost">{t.btn2}</a>
        </div>
      </div>

      {/* Form */}
      <div className="hero-right" id="get-offer">
        <div className="form-card">
          <div className="form-head">
            <h3>{t.formTitle}</h3>
            <p>{t.formSub}</p>
          </div>

          {submitted ? (
            <div className="form-success" style={{ display: 'block' }}>
              <div className="success-icon">✓</div>
              <h4>{t.successTitle}</h4>
              <p>{t.successMsg}</p>
            </div>
          ) : (
            <div className="form-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label>{t.labelName}</label>
                    <input type="text" name="name" placeholder={t.placeholderName} required />
                  </div>
                  <div className="field">
                    <label>{t.labelPhone}</label>
                    <input type="tel" name="phone" placeholder={t.placeholderPhone} required />
                  </div>
                </div>
                <div className="field">
                  <label>{t.labelEmail}</label>
                  <input type="email" name="email" placeholder={t.placeholderEmail} required />
                </div>
                <div className="field">
                  <label>{t.labelAddress}</label>
                  <input type="text" name="property_address" placeholder={t.placeholderAddress} required autoComplete="off" />
                </div>
                <div className="form-row form-row-citytip">
                  <div className="field">
                    <label>{t.labelCity}</label>
                    <input type="text" name="city" placeholder={t.placeholderCity} required />
                  </div>
                  <div className="field">
                    <label>{t.labelZip}</label>
                    <input type="text" name="zip" placeholder={t.placeholderZip} required />
                  </div>
                </div>
                <div className="field">
                  <label>{t.labelSituation}</label>
                  <textarea name="situation" placeholder={t.placeholderSituation} />
                </div>
                <button type="submit" className="form-btn" disabled={loading}>
                  {btnText || t.formBtn}
                </button>
                <p className="form-note">{t.formNote}</p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
