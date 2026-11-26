import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="fsec">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.title}</h1>
          <p className="lede">{c.subtitle}</p>
        </Reveal>

        <Reveal>
          <dl className="cinfo">
            <div>
              <dt>{c.whereLabel}</dt>
              <dd>{c.whereValue}</dd>
            </div>
            <div>
              <dt>{c.officesLabel}</dt>
              <dd>{c.officesValue}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal>
          {sent ? (
            <div className="done">
              <h2>{c.fields.success}</h2>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div>
                <label htmlFor="name">
                  {c.fields.name} <span className="req">*</span>
                </label>
                <input id="name" name="name" autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="org">
                  {c.fields.organisation} <span className="req">*</span>
                </label>
                <input
                  id="org"
                  name="organisation"
                  autoComplete="organization"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">
                  {c.fields.email} <span className="req">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="cphone">
                  {c.fields.phone} <span className="req">*</span>
                </label>
                <input
                  id="cphone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                />
              </div>
              <div>
                <label htmlFor="industry">
                  {c.fields.industry} <span className="req">*</span>
                </label>
                <select id="industry" name="industry" defaultValue="" required>
                  <option value="" disabled>
                    {c.fields.choose}
                  </option>
                  {c.industries.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="type">
                  {c.fields.subject} <span className="req">*</span>
                </label>
                <select id="type" name="subject" defaultValue="" required>
                  <option value="" disabled>
                    {c.fields.choose}
                  </option>
                  {c.subjects.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="full">
                <label htmlFor="message">
                  {c.fields.objectives} <span className="req">*</span>
                </label>
                <textarea id="message" name="message" required />
              </div>
              <div className="full actions">
                <button className="btn-ryse solid" type="submit">
                  {c.fields.submit}
                </button>
              </div>
            </form>
          )}
        </Reveal>
        <p className="priv">{c.fields.note}</p>
      </div>
    </section>
  )
}
