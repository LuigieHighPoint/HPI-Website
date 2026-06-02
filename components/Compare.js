import { useLang } from './LangContext'

export default function Compare() {
  const { t } = useLang()
  return (
    <section className="compare">
      <div className="sec-lbl" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.compareLabel}</div>
      <h2 className="sec-ttl">{t.compareTitle}</h2>
      <p className="sec-sub" style={{ marginBottom: '3rem' }}>{t.compareSub}</p>
      <table className="ctbl">
        <thead>
          <tr>
            <th style={{ width: '40%', textAlign: 'left' }}>What matters</th>
            <th className="hpi hpi-h" style={{ width: '30%' }}>High Point Investments</th>
            <th style={{ width: '30%' }}>Traditional listing</th>
          </tr>
        </thead>
        <tbody>
          {t.compareRows.map(([label, hpi, trad], i) => (
            <tr key={i}>
              <td>{label}</td>
              <td className="hpi yes">{hpi}</td>
              <td className="no">{trad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
