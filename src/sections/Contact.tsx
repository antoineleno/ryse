import { useState, type FormEvent } from 'react'
import {
  HomeItem,
  HomeSection,
  HomeStagger,
} from '../components/home/HomeReveal'
import { PageIntro } from '../components/PageIntro'
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
    <section className="bg-ivory">
      <HomeSection className="border-b border-rule">
        <div className="wrap">
          <PageIntro eyebrow={c.eyebrow} title={c.title} body={c.subtitle} />
        </div>
      </HomeSection>

      <HomeSection className="bg-sand2">
        <div className="page-form">
          <div className="wrap page-form__grid">
            <HomeStagger className="page-form__aside">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {c.whereLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-form__aside-title">
                {c.whereValue}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-form__rule"
                aria-hidden
              />
              <HomeItem index={3} as="dl" className="page-form__facts">
                <div>
                  <dt>{c.officesLabel}</dt>
                  <dd>{c.officesValue}</dd>
                </div>
              </HomeItem>
            </HomeStagger>

            <HomeItem index={0} className="page-form__panel" baseDelay={0.1}>
              {sent ? (
                <div className="page-form__done">
                  <h2>{c.fields.success}</h2>
                </div>
              ) : (
                <form
                  className="page-form__fields"
                  onSubmit={onSubmit}
                  noValidate
                >
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
              <p className="page-form__note">{c.fields.note}</p>
            </HomeItem>
          </div>
        </div>
      </HomeSection>
    </section>
  )
}
