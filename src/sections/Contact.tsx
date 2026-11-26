import { useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
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
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 opacity-[0.12]">
        <img
          src="/media/contact-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <Reveal className="max-w-3xl">
          <SectionLabel>{c.eyebrow}</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] font-medium text-ink text-balance">
            {c.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-muted">
            {c.subtitle}
          </p>
        </Reveal>

        <Reveal className="mt-10 grid gap-8 border-y border-ink/10 py-8 sm:grid-cols-2">
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink/55 uppercase">
              {c.whereLabel}
            </p>
            <p className="font-display mt-2 text-2xl text-ink">{c.whereValue}</p>
          </div>
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink/55 uppercase">
              {c.officesLabel}
            </p>
            <p className="font-display mt-2 text-2xl text-ink">{c.officesValue}</p>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          {sent ? (
            <div className="border border-gold/40 bg-cream-soft px-8 py-12 text-center">
              <p className="font-display text-2xl text-ink">{c.fields.success}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label={`${c.fields.name} *`}>
                  <input required className="input-field" name="name" />
                </Field>
                <Field label={`${c.fields.organisation} *`}>
                  <input required className="input-field" name="organisation" />
                </Field>
                <Field label={`${c.fields.email} *`}>
                  <input
                    required
                    type="email"
                    className="input-field"
                    name="email"
                  />
                </Field>
                <Field label={`${c.fields.phone} *`}>
                  <input required className="input-field" name="phone" />
                </Field>
                <Field label={`${c.fields.industry} *`}>
                  <select required className="input-field" name="industry" defaultValue="">
                    <option value="" disabled>
                      {c.fields.choose}
                    </option>
                    {c.industries.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label={`${c.fields.subject} *`}>
                  <select required className="input-field" name="subject" defaultValue="">
                    <option value="" disabled>
                      {c.fields.choose}
                    </option>
                    {c.subjects.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label={`${c.fields.objectives} *`}>
                <textarea
                  required
                  name="objectives"
                  rows={5}
                  className="input-field resize-y"
                />
              </Field>
              <div>
                <Button type="submit">{c.fields.submit}</Button>
                <p className="mt-4 text-sm text-ink-muted">{c.fields.note}</p>
              </div>
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
