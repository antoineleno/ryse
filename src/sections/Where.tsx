import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { useLanguage } from '../context/LanguageContext'

export function Where() {
  const { t } = useLanguage()
  const w = t.where

  return (
    <section className="bg-cream-soft">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <Reveal className="max-w-3xl">
          <SectionLabel>{w.eyebrow}</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.08] font-medium text-ink">
            {w.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-muted">
            {w.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 border-t border-ink/10 pt-12 md:grid-cols-2">
          {w.locations.map((loc, i) => (
            <Reveal
              key={loc.name}
              delay={i * 0.1}
              as="article"
              className="group"
            >
              <div className="relative mb-7 aspect-[16/10] overflow-hidden">
                <img
                  src={loc.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-[0.68rem] tracking-[0.18em] text-cream/90 uppercase">
                  {loc.meta}
                </span>
              </div>
              <h3 className="font-display text-[2.2rem] font-medium text-ink md:text-[2.5rem]">
                {loc.name}
              </h3>
              <p className="mt-2 text-[0.72rem] font-semibold tracking-[0.16em] text-gold uppercase">
                {loc.meta}
              </p>
              <p className="mt-4 max-w-md leading-relaxed text-ink-muted">
                {loc.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
