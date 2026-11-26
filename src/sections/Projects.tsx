import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { useLanguage } from '../context/LanguageContext'

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects
  const f = p.featured

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <Reveal className="max-w-3xl">
          <SectionLabel>{p.eyebrow}</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.08] font-medium text-ink">
            {p.title}
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-muted">
            {p.subtitle}
          </p>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden border border-ink/10 lg:grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative bg-cream-soft p-8 md:p-12">
            <div className="absolute inset-0 opacity-[0.07]">
              <img
                src="/media/project-energy.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative">
              <p className="diamond text-[0.72rem] font-semibold tracking-[0.18em] text-gold uppercase">
                {f.tag}
              </p>
              <h3 className="font-display mt-4 text-[clamp(2rem,3.5vw,3rem)] font-medium text-ink">
                {f.title}
              </h3>
              {f.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mt-5 max-w-xl leading-relaxed text-ink-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-forest p-8 text-cream md:p-12">
            <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {f.meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-[0.68rem] font-semibold tracking-[0.18em] text-gold uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-[1.05rem] leading-snug">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 overflow-hidden">
              <img
                src="/media/project-energy.jpg"
                alt=""
                className="aspect-[16/10] w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
