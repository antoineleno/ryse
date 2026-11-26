import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { useLanguage } from '../context/LanguageContext'

export function Expertise() {
  const { t } = useLanguage()
  const e = t.expertise

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <Reveal className="max-w-3xl">
          <SectionLabel>{e.eyebrow}</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.08] font-medium text-ink">
            {e.title}
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-muted">
            {e.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid overflow-hidden lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="relative min-h-[320px] bg-forest p-8 text-cream md:p-12">
            <img
              src="/media/expertise-policy.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="relative">
              <SectionLabel>{e.leadingLabel}</SectionLabel>
              <h3 className="font-display mt-2 text-[clamp(1.8rem,3vw,2.6rem)] leading-tight font-medium">
                {e.leadingTitle}
              </h3>
              <p className="mt-5 max-w-xl leading-relaxed text-cream/80">
                {e.leadingBody}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="border border-ink/10 border-t-0 bg-cream-soft p-8 md:p-10 lg:border-t lg:border-l-0">
            <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-gold uppercase">
              {e.whereHelpLabel}
            </p>
            <ul className="mt-5 space-y-3">
              {e.whereHelp.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-ink/8 pb-3 text-sm text-ink/85 last:border-0"
                >
                  <span className="mt-1 text-[0.55rem] text-gold">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal className="border border-ink/10 bg-cream-soft p-8">
            <h4 className="font-display text-2xl font-medium text-ink">
              {e.govTitle}
            </h4>
            <p className="mt-4 leading-relaxed text-ink-muted">{e.govBody}</p>
          </Reveal>
          <Reveal delay={0.08} className="border border-ink/10 bg-cream-soft p-8">
            <h4 className="font-display text-2xl font-medium text-ink">
              {e.privateTitle}
            </h4>
            <p className="mt-4 leading-relaxed text-ink-muted">{e.privateBody}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {e.practices.map((practice, i) => (
            <Reveal key={practice.title} delay={i * 0.06}>
              <div className="mb-4 h-px w-14 bg-gold" />
              <h3 className="font-display text-[1.65rem] leading-tight font-medium text-ink">
                {practice.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-muted">{practice.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="bg-cream-deep">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-8 md:py-20 lg:px-10">
          <Reveal>
            <SectionLabel>{e.clientsLabel}</SectionLabel>
            <h3 className="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.12] font-medium text-ink">
              {e.clientsTitle}
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-ink-muted">{e.clientsBody}</p>
            <p className="mt-8 text-[0.72rem] font-semibold tracking-[0.18em] text-ink uppercase">
              {e.clientTypes.join(' · ')}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
