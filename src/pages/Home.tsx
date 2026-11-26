import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkButton } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'
import { Hero } from '../sections/Hero'

export function Home() {
  const { t } = useLanguage()
  const h = t.home
  const project = t.projects.featured

  return (
    <>
      <Hero />

      {/* Leading practice — home only */}
      <section className="bg-forest">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8 md:py-20 lg:px-10">
          <Reveal>
            <SectionLabel>{h.practiceLabel}</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-medium text-cream">
              {h.practiceTitle}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-cream/75">
              {h.practiceBody}
            </p>
            <p className="mt-8 text-[0.72rem] font-semibold tracking-[0.16em] text-gold-soft uppercase">
              {h.practiceTags.join(' · ')}
            </p>
            <Link
              to={routes.expertise}
              className="mt-8 inline-flex items-center gap-2 border-b border-gold/70 pb-1 text-[0.7rem] font-semibold tracking-[0.16em] text-cream uppercase transition-colors hover:text-gold-soft"
            >
              {t.explore}
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="relative overflow-hidden">
            <img
              src="/media/expertise-policy.jpg"
              alt=""
              className="aspect-[5/4] w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cream/10" />
          </Reveal>
        </div>
      </section>

      {/* Sector snapshots — home only */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-10">
          <Reveal className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <SectionLabel>{h.sectorsLabel}</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,3.8vw,3rem)] leading-[1.1] font-medium text-ink">
                {h.sectorsTitle}
              </h2>
            </div>
            <Link
              to={routes.sectors}
              className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:text-gold-deep"
            >
              {t.explore}
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {h.sectorCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06} as="article">
                <Link
                  to={routes.sectors}
                  className="group block h-full overflow-hidden border border-ink/10 bg-cream-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={card.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/55 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-medium text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {card.body}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project preview */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-10">
          <Reveal className="overflow-hidden border border-ink/10 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-cream p-8 md:p-12">
              <SectionLabel>{h.projectLabel}</SectionLabel>
              <p className="diamond mt-2 text-[0.72rem] font-semibold tracking-[0.16em] text-gold uppercase">
                {project.tag}
              </p>
              <h2 className="font-display mt-3 text-[clamp(1.9rem,3.2vw,2.8rem)] font-medium text-ink">
                {project.title}
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-ink-muted">
                {project.body[0]}
              </p>
              <Link
                to={routes.projects}
                className="mt-8 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:text-gold-deep"
              >
                {t.explore}
                <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="relative min-h-[260px] bg-forest">
              <img
                src="/media/project-energy.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-forest/35" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Where we work strip */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-20 lg:px-10">
          <Reveal className="mb-10 flex items-end justify-between gap-6">
            <div>
              <SectionLabel>{t.where.eyebrow}</SectionLabel>
              <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.7rem)] font-medium text-ink">
                {t.where.title}
              </h2>
            </div>
            <Link
              to={routes.where}
              className="hidden items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:text-gold-deep sm:inline-flex"
            >
              {t.explore}
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {t.where.locations.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 0.08} as="article">
                <Link to={routes.where} className="group block">
                  <div className="relative mb-5 aspect-[16/9] overflow-hidden">
                    <img
                      src={loc.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent" />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {loc.name}
                  </h3>
                  <p className="mt-1 text-[0.7rem] font-semibold tracking-[0.14em] text-gold uppercase">
                    {loc.meta}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-24 lg:px-10">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-medium text-balance text-cream">
              {h.ctaTitle}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-cream/75">
              {h.ctaBody}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-3 md:justify-self-end">
            <LinkButton to={routes.contact}>{t.contactCta}</LinkButton>
            <LinkButton
              to={routes.about}
              variant="ghost"
              className="border-cream/30 text-cream hover:border-gold hover:text-gold-soft"
            >
              {t.nav.find((n) => n.id === 'about')?.label ?? 'About'}
            </LinkButton>
          </Reveal>
        </div>
      </section>
    </>
  )
}
