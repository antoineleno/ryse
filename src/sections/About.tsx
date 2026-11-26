import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { useLanguage } from '../context/LanguageContext'

/** Dedicated About page content — cream editorial, matching the site samples. */
export function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section className="bg-cream">
      {/* Hero — typography only, as in the About screenshots */}
      <div className="mx-auto max-w-[1440px] px-5 pt-10 pb-16 md:px-8 md:pt-14 md:pb-20 lg:px-10">
        <Reveal className="max-w-3xl">
          <SectionLabel>{a.eyebrow}</SectionLabel>
          <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.06] font-medium text-balance text-ink">
            {a.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-ink-muted">
            {a.intro}
          </p>
        </Reveal>
      </div>

      {/* Supporting statement */}
      <div className="bg-cream-soft">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 md:py-16 lg:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[1.1rem] leading-relaxed text-ink/85 md:text-[1.25rem]">
              {a.body}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionLabel>{a.missionLabel}</SectionLabel>
            <h2 className="font-display text-[1.85rem] leading-tight font-medium text-ink md:text-[2.15rem]">
              {a.missionTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">{a.missionBody}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel>{a.visionLabel}</SectionLabel>
            <h2 className="font-display text-[1.85rem] leading-tight font-medium text-ink md:text-[2.15rem]">
              {a.visionTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">{a.visionBody}</p>
          </Reveal>
        </div>
      </div>

      {/* Values */}
      <div className="border-t border-ink/8 bg-cream-soft">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 lg:px-10">
          <Reveal>
            <SectionLabel>{a.valuesLabel}</SectionLabel>
          </Reveal>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08} as="article">
                <div className="mb-4 h-px w-12 bg-gold" />
                <h3 className="font-display text-2xl font-medium text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Why RYSE */}
      <div className="bg-cream-deep">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center md:px-8 md:py-20 lg:px-10">
          <Reveal>
            <SectionLabel>{a.whyLabel}</SectionLabel>
            <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.12] font-medium text-balance text-ink">
              {a.whyTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-ink-muted">{a.whyBody}</p>
            <p className="mt-8 text-[0.72rem] font-semibold tracking-[0.18em] text-ink uppercase">
              {a.whyKeywords.join(' · ')}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
