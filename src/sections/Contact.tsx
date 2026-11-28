import { useState, type FormEvent } from 'react'
import { CountryCodeSelect } from '../components/CountryCodeSelect'
import {
  HomeItem,
  HomeReveal,
  HomeStagger,
} from '../components/home/HomeReveal'
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
    <div className="ct-page">
      <section className="ct-hero">
        <HomeStagger className="ct-hero__copy">
          <HomeItem
            index={0}
            as="p"
            className="ab-eyebrow"
            tone="soft"
            baseDelay={0.06}
            stagger={0.11}
          >
            {c.eyebrow}
          </HomeItem>
          <HomeItem
            index={1}
            as="h1"
            className="ct-hero__title"
            baseDelay={0.06}
            stagger={0.11}
          >
            {c.title}
          </HomeItem>
          <HomeItem
            index={2}
            as="p"
            className="ct-hero__body"
            tone="soft"
            baseDelay={0.06}
            stagger={0.11}
          >
            {c.subtitle}
          </HomeItem>
        </HomeStagger>
        <HomeReveal className="ct-hero__media" delay={0.22} tone="media">
          <img
            className="ct-hero__bg"
            src="/media/contact-bg.jpg?v=2"
            alt=""
            aria-hidden="true"
          />
        </HomeReveal>
      </section>

      <section className="ct-main">
        <div className="wrap ct-main__grid">
          <HomeStagger className="ct-aside">
            <HomeItem
              index={0}
              as="p"
              className="ab-eyebrow"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {c.directLabel}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ct-aside__title"
              baseDelay={0.05}
              stagger={0.09}
            >
              {c.directTitle}
            </HomeItem>
            <HomeItem
              index={2}
              as="span"
              className="ab-rule"
              tone="rule"
              baseDelay={0.2}
            />

            <HomeItem index={3} as="dl" className="ct-facts" baseDelay={0.08}>
              <div className="ct-facts__row">
                <dt>{c.emailLabel}</dt>
                <dd>
                  <a href={`mailto:${c.emailValue}`}>{c.emailValue}</a>
                </dd>
              </div>
              <div className="ct-facts__row">
                <dt>{c.officesLabel}</dt>
                <dd>{c.officesValue}</dd>
              </div>
              <div className="ct-facts__row">
                <dt>{c.whereLabel}</dt>
                <dd>{c.whereValue}</dd>
              </div>
            </HomeItem>
          </HomeStagger>

          <HomeItem index={0} className="ct-form" baseDelay={0.12}>
            <div className="ct-form__head">
              <p className="ab-eyebrow">{c.formLabel}</p>
              <p className="ct-form__lead">{c.formLead}</p>
            </div>

            {sent ? (
              <div className="ct-form__done">
                <h2>{c.fields.success}</h2>
              </div>
            ) : (
              <form className="ct-fields" onSubmit={onSubmit} noValidate>
                <div>
                  <label htmlFor="ct-name">
                    {c.fields.name} <span className="req">*</span>
                  </label>
                  <input
                    id="ct-name"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="ct-org">
                    {c.fields.organisation} <span className="req">*</span>
                  </label>
                  <input
                    id="ct-org"
                    name="organisation"
                    autoComplete="organization"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="ct-email">
                    {c.fields.email} <span className="req">*</span>
                  </label>
                  <input
                    id="ct-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="ct-phone">
                    {c.fields.phone} <span className="req">*</span>
                  </label>
                  <div className="ct-phone">
                    <CountryCodeSelect
                      label={c.fields.countryCode}
                      required
                    />
                    <input
                      id="ct-phone"
                      className="ct-phone__number"
                      name="phone"
                      type="tel"
                      autoComplete="tel-national"
                      inputMode="tel"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="ct-industry">
                    {c.fields.industry} <span className="req">*</span>
                  </label>
                  <select
                    id="ct-industry"
                    name="industry"
                    defaultValue=""
                    required
                  >
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
                  <label htmlFor="ct-subject">
                    {c.fields.subject} <span className="req">*</span>
                  </label>
                  <select
                    id="ct-subject"
                    name="subject"
                    defaultValue=""
                    required
                  >
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
                <div className="ct-fields__full">
                  <label htmlFor="ct-message">
                    {c.fields.objectives} <span className="req">*</span>
                  </label>
                  <textarea id="ct-message" name="message" rows={3} required />
                </div>
                <div className="ct-fields__full ct-fields__actions">
                  <button className="btn-ryse solid" type="submit">
                    {c.fields.submit}
                  </button>
                  <p className="ct-form__note">{c.fields.note}</p>
                </div>
              </form>
            )}
          </HomeItem>
        </div>
      </section>
    </div>
  )
}
