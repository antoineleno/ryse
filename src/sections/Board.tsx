import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { useLanguage } from '../context/LanguageContext'

export function Board() {
  const { t } = useLanguage()
  const b = t.board

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-10">
        <Reveal className="max-w-3xl">
          <SectionLabel>{b.eyebrow}</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.08] font-medium text-ink">
            {b.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-muted">
            {b.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 border-t border-ink/10 pt-14 md:space-y-20">
          {b.members.map((member, i) => (
            <Reveal
              key={member.name}
              delay={0.05}
              className={`grid items-start gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12 ${
                i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="group relative overflow-hidden bg-cream-deep">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-square w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
              </div>
              <div>
                <h3 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] font-medium text-ink">
                  {member.name}
                </h3>
                <p className="mt-2 text-[0.72rem] font-semibold tracking-[0.18em] text-gold uppercase">
                  {member.role}
                </p>
                <p className="mt-6 leading-relaxed text-ink-muted">{member.bio}</p>
                <ul className="mt-8">
                  {member.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-t border-ink/10 py-3.5 text-sm leading-relaxed text-ink/85"
                    >
                      <span className="mt-1 text-[0.55rem] text-gold">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
