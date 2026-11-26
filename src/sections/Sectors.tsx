import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { useLanguage } from '../context/LanguageContext'

export function Sectors() {
  const { t } = useLanguage()
  const s = t.sectors

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <Reveal className="max-w-3xl">
          <SectionLabel>{s.eyebrow}</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.08] font-medium text-ink">
            {s.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-muted">
            {s.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {s.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              as="article"
              className="group overflow-hidden border border-ink/10 bg-cream-soft"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent opacity-70" />
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-display text-[1.7rem] font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="bg-forest">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:grid-cols-3 md:px-8 md:py-16 lg:px-10">
          <Reveal>
            <SectionLabel>{s.enablersLabel}</SectionLabel>
            <h3 className="font-display mt-2 text-[1.9rem] leading-tight font-medium text-cream md:text-[2.2rem]">
              {s.enablersTitle}
            </h3>
          </Reveal>
          <Reveal delay={0.08}>
            <h4 className="text-[0.8rem] font-semibold tracking-[0.16em] text-gold uppercase">
              {s.technology.title}
            </h4>
            <p className="mt-3 leading-relaxed text-cream/75">{s.technology.body}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <h4 className="text-[0.8rem] font-semibold tracking-[0.16em] text-gold uppercase">
              {s.finance.title}
            </h4>
            <p className="mt-3 leading-relaxed text-cream/75">{s.finance.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
