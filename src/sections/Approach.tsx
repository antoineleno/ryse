import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Approach() {
  const { t } = useLanguage()
  const a = t.approach
  const [active, setActive] = useState(0)

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.85fr]">
          <Reveal className="max-w-2xl">
            <SectionLabel>{a.eyebrow}</SectionLabel>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.08] font-medium text-ink">
              {a.title}
            </h2>
            <p className="mt-5 font-display text-[1.2rem] leading-relaxed text-ink/75 italic md:text-[1.35rem]">
              {a.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="overflow-hidden">
            <img
              src="/media/approach-meeting.jpg"
              alt=""
              className="aspect-[5/3] w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute top-[18px] right-0 left-0 hidden h-px bg-gold/40 lg:block" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {a.steps.map((step, i) => {
              const isActive = active === i
              return (
                <Reveal key={step.title} delay={i * 0.05} as="article">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`relative h-full w-full border px-5 py-6 text-left transition-all duration-400 ${
                      isActive
                        ? 'border-forest bg-forest text-cream shadow-[0_18px_40px_rgba(26,42,35,0.18)]'
                        : 'border-ink/10 bg-cream-soft text-ink hover:border-gold/50'
                    }`}
                  >
                    <span
                      className={`mb-5 flex h-3.5 w-3.5 rotate-45 ${
                        isActive ? 'bg-gold' : 'bg-gold/80'
                      }`}
                    />
                    <span className="mb-2 block text-[0.65rem] tracking-[0.18em] opacity-60 uppercase">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-xl font-medium md:text-[1.35rem]">
                      {step.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        isActive ? 'text-cream/80' : 'text-ink-muted'
                      }`}
                    >
                      {step.body}
                    </p>
                  </button>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-ink/8 bg-cream-soft">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-8 lg:px-10">
          <Reveal>
            <SectionLabel>{a.networkLabel}</SectionLabel>
            <h3 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.12] font-medium text-ink">
              {a.networkTitle}
            </h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="leading-relaxed text-ink-muted">{a.networkBody}</p>
            <Link
              to={routes.experts}
              className="mt-6 inline-flex border-b border-gold pb-1 text-[0.72rem] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:text-gold-deep"
            >
              {a.networkCta}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
