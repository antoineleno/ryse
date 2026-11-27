import { useState, type FormEvent } from 'react'
import {
  HomeItem,
  HomeSection,
  HomeStagger,
} from '../components/home/HomeReveal'
import { PageIntro } from '../components/PageIntro'
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
    <section className="bg-ivory">
      <HomeSection className="border-b border-rule">
        <div className="wrap">
          <PageIntro eyebrow={e.eyebrow} title={e.title} body={e.subtitle} />
        </div>
      </HomeSection>

      <HomeSection className="bg-sand2">
        <div className="page-form">
          <div className="wrap page-form__grid">
            <HomeStagger className="page-form__aside">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {e.eyebrow}
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-form__aside-title">
                {t.about.networkTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-form__rule"
                aria-hidden
              />
              <HomeItem index={3} as="p" className="page-form__aside-body">
                {t.about.networkBody}
              </HomeItem>
            </HomeStagger>

            <HomeItem index={0} className="page-form__panel" baseDelay={0.1}>
              {sent ? (
                <div className="page-form__done">
                  <h2>{e.fields.success}</h2>
                </div>
              ) : (
                <form
                  className="page-form__fields"
                  onSubmit={onSubmit}
                  noValidate
                >
                  <div>
                    <label htmlFor="x-name">
                      {e.fields.fullName} <span className="req">*</span>
                    </label>
                    <input id="x-name" name="name" autoComplete="name" required />
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
                    <input
                      id="x-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                    />
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
                    <select id="x-exp" name="experience" defaultValue="" required>
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
                  <div className="full">
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
                  <div className="full">
                    <label htmlFor="x-cv">
                      {e.fields.cv} <span className="req">*</span>
                    </label>
                    <div className="file">
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
                  <label className="chk full">
                    <input type="checkbox" name="consent" value="yes" required />
                    <span>{e.fields.consent}</span>
                  </label>
                  <div className="full actions">
                    <button className="btn-ryse solid" type="submit">
                      {e.fields.submit}
                    </button>
                  </div>
                </form>
              )}
            </HomeItem>
          </div>
        </div>
      </HomeSection>
    </section>
  )
}
