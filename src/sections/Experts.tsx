import { useState, type FormEvent } from 'react'
import {
  CountryCodeSelect,
  CountrySelect,
} from '../components/CountryCodeSelect'
import {
  HomeItem,
  HomeReveal,
  HomeStagger,
} from '../components/home/HomeReveal'
import { useLanguage } from '../context/LanguageContext'

export function Experts() {
  const { t } = useLanguage()
  const e = t.experts
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="ct-page">
      <section className="xp-hero" aria-label={e.eyebrow}>
        <HomeStagger className="xp-hero__copy">
          <HomeItem
            index={0}
            as="p"
            className="ab-eyebrow"
            tone="soft"
            baseDelay={0.06}
            stagger={0.1}
          >
            {e.eyebrow}
          </HomeItem>
          <h1 className="xp-hero__title">
            <HomeItem
              index={1}
              as="span"
              className="xp-hero__line"
              baseDelay={0.06}
              stagger={0.1}
            >
              {e.titleLines[0]}
            </HomeItem>
            <HomeItem
              index={2}
              as="span"
              className="xp-hero__line is-accent"
              baseDelay={0.06}
              stagger={0.1}
            >
              {e.titleLines[1]}
            </HomeItem>
          </h1>
          <HomeItem
            index={3}
            as="span"
            className="ab-rule"
            tone="rule"
            baseDelay={0.36}
          />
          <HomeItem
            index={4}
            as="p"
            className="xp-hero__body"
            tone="soft"
            baseDelay={0.08}
            stagger={0.1}
          >
            {e.subtitle}
          </HomeItem>
          <HomeItem
            index={5}
            as="p"
            className="xp-hero__meta"
            tone="soft"
            baseDelay={0.42}
          >
            {e.heroMeta}
          </HomeItem>
          <HomeItem index={6} className="xp-hero__actions" baseDelay={0.52}>
            <a className="btn-ryse solid xp-hero__btn" href="#application">
              {e.heroCta}
            </a>
          </HomeItem>
        </HomeStagger>

        <HomeReveal className="xp-hero__media" delay={0.16} tone="media">
          <img
            className="xp-hero__img"
            src="/media/practice-engage.jpg"
            alt=""
            aria-hidden="true"
            decoding="async"
            fetchPriority="high"
          />
        </HomeReveal>
      </section>

      <section className="ct-main" id="application">
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
              {e.directLabel}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ct-aside__title"
              baseDelay={0.05}
              stagger={0.09}
            >
              {e.directTitle}
            </HomeItem>
            <HomeItem
              index={2}
              as="span"
              className="ab-rule"
              tone="rule"
              baseDelay={0.2}
            />
            <HomeItem
              index={3}
              as="p"
              className="ct-aside__body"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {e.directBody}
            </HomeItem>

            <HomeItem index={4} as="dl" className="ct-facts" baseDelay={0.08}>
              {e.points.map((point) => (
                <div key={point.label} className="ct-facts__row">
                  <dt>{point.label}</dt>
                  <dd className="ct-facts__text">{point.value}</dd>
                </div>
              ))}
            </HomeItem>
          </HomeStagger>

          <HomeItem index={0} className="ct-form" baseDelay={0.12}>
            <div className="ct-form__head">
              <p className="ab-eyebrow">{e.formLabel}</p>
              <p className="ct-form__lead">{e.formLead}</p>
            </div>

            {sent ? (
              <div className="ct-form__done">
                <h2>{e.fields.success}</h2>
              </div>
            ) : (
              <form className="ct-fields" onSubmit={onSubmit} noValidate>
                <div>
                  <label htmlFor="x-name">
                    {e.fields.fullName} <span className="req">*</span>
                  </label>
                  <input
                    id="x-name"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="x-email">
                    {e.fields.email} <span className="req">*</span>
                  </label>
                  <input
                    id="x-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="x-phone">
                    {e.fields.phone} <span className="req">*</span>
                  </label>
                  <div className="ct-phone">
                    <CountryCodeSelect
                      label={e.fields.countryCode}
                      required
                    />
                    <input
                      id="x-phone"
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
                  <label htmlFor="x-li">
                    {e.fields.linkedin} <span className="req">*</span>
                  </label>
                  <input
                    id="x-li"
                    name="linkedin"
                    type="url"
                    placeholder="https://www.linkedin.com/in/…"
                    required
                  />
                </div>
                <div>
                  <label id="x-residence-label">
                    {e.fields.residence} <span className="req">*</span>
                  </label>
                  <CountrySelect
                    name="residence"
                    mode="country"
                    label={e.fields.residence}
                    placeholder={e.fields.choose}
                    required
                    className="ct-code--wide"
                  />
                </div>
                <div>
                  <label htmlFor="x-sector">
                    {e.fields.mainField} <span className="req">*</span>
                  </label>
                  <select id="x-sector" name="field" defaultValue="" required>
                    <option value="" disabled>
                      {e.fields.choose}
                    </option>
                    {e.fieldOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="x-exp">
                    {e.fields.years} <span className="req">*</span>
                  </label>
                  <select
                    id="x-exp"
                    name="experience"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      {e.fields.choose}
                    </option>
                    {e.yearOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="x-cty">
                    {e.fields.countries} <span className="req">*</span>
                  </label>
                  <input
                    id="x-cty"
                    name="countries"
                    placeholder={e.fields.countriesPlaceholder}
                    required
                  />
                </div>
                <div className="ct-fields__full">
                  <label htmlFor="x-cv">
                    {e.fields.cv} <span className="req">*</span>
                  </label>
                  <div className="ct-file">
                    <input
                      id="x-cv"
                      name="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <small>{e.fields.cvHint}</small>
                  </div>
                </div>
                <label className="ct-chk ct-fields__full">
                  <input type="checkbox" name="consent" value="yes" required />
                  <span>{e.fields.consent}</span>
                </label>
                <div className="ct-fields__full ct-fields__actions">
                  <button className="btn-ryse solid" type="submit">
                    {e.fields.submit}
                  </button>
                  <p className="ct-form__note">{e.fields.note}</p>
                </div>
              </form>
            )}
          </HomeItem>
        </div>
      </section>
    </div>
  )
}
