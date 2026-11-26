import { useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { useLanguage } from '../context/LanguageContext'

export function Experts() {
  const { t } = useLanguage()
  const e = t.experts
  const [sent, setSent] = useState(false)
  const [fileName, setFileName] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="bg-cream-soft">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <Reveal className="max-w-3xl">
          <SectionLabel>{e.eyebrow}</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] font-medium text-ink">
            {e.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-muted">
            {e.subtitle}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          {sent ? (
            <div className="border border-gold/40 bg-cream px-8 py-12 text-center">
              <p className="font-display text-2xl text-ink">{e.fields.success}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label={`${e.fields.fullName} *`}>
                  <input required className="input-field" name="fullName" />
                </Field>
                <Field label={`${e.fields.email} *`}>
                  <input
                    required
                    type="email"
                    className="input-field"
                    name="email"
                  />
                </Field>
                <Field label={`${e.fields.phone} *`}>
                  <input required className="input-field" name="phone" />
                </Field>
                <Field label={`${e.fields.linkedin} *`}>
                  <input
                    required
                    className="input-field"
                    name="linkedin"
                    placeholder="https://www.linkedin.com/in/..."
                  />
                </Field>
                <Field label={`${e.fields.mainField} *`}>
                  <select required className="input-field" name="mainField" defaultValue="">
                    <option value="" disabled>
                      {e.fields.choose}
                    </option>
                    {e.fieldOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label={`${e.fields.years} *`}>
                  <select required className="input-field" name="years" defaultValue="">
                    <option value="" disabled>
                      {e.fields.choose}
                    </option>
                    {e.yearOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label={`${e.fields.countries} *`}>
                <input
                  required
                  className="input-field"
                  name="countries"
                  placeholder={e.fields.countriesPlaceholder}
                />
              </Field>

              <Field label={`${e.fields.cv} *`}>
                <label className="flex cursor-pointer items-center gap-4 border border-dashed border-ink/20 bg-cream px-4 py-5 transition-colors hover:border-gold">
                  <span className="bg-ink px-3 py-2 text-[0.65rem] tracking-[0.12em] text-cream uppercase">
                    Choose file
                  </span>
                  <span className="text-sm text-ink-muted">
                    {fileName || e.fields.cvHint}
                  </span>
                  <input
                    required
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={(ev) =>
                      setFileName(ev.target.files?.[0]?.name ?? '')
                    }
                  />
                </label>
              </Field>

              <label className="flex items-start gap-3 text-sm text-ink-muted">
                <input required type="checkbox" className="mt-1 accent-gold" />
                <span>{e.fields.consent}</span>
              </label>

              <Button type="submit">{e.fields.submit}</Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.68rem] font-semibold tracking-[0.16em] text-ink/70 uppercase">
        {label}
      </span>
      {children}
    </label>
  )
}
