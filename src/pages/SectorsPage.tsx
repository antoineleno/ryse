import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  IconEnergy,
  IconExtractive,
  IconSecurity,
} from '../components/BrandIcons'
import {
  HomeItem,
  HomeReveal,
  HomeStagger,
} from '../components/home/HomeReveal'
import { useLanguage } from '../context/LanguageContext'
import { homeTween } from '../lib/motion'
import { routes } from '../lib/routes'

const sectorIcons = [IconExtractive, IconEnergy, IconSecurity] as const

export function SectorsPage() {
  const { t } = useLanguage()
  const s = t.sectors
  const [extractive, energy, security] = s.items
  const reduce = useReducedMotion()

  const cardBodies = t.home.pillars
    .filter((p) =>
      ['extractive', 'energy', 'security', 'extractives', 'énergie', 'sécurité'].some((k) =>
        p.title.toLowerCase().includes(k),
      ),
    )
    .slice(0, 3)
    .map((p) => p.body)

  // Short labels on cards (mock style); full titles live in numbered sections
  const cardLabels = s.items.map((item) => item.title.split(/[\s&/]+/)[0])

  const cards = s.items.map((item, i) => ({
    label: cardLabels[i],
    body: cardBodies[i] ?? item.body,
    Icon: sectorIcons[i] ?? IconExtractive,
  }))

  const problemTitle = (() => {
    const parts = s.eyebrow.split(' ')
    if (parts.length < 2) return s.eyebrow
    const head = parts.slice(0, -2).join(' ')
    const tail = parts.slice(-2).join(' ')
    return (
      <>
        {head ? `${head} ` : null}
        <em>{tail}</em>
      </>
    )
  })()

  return (
    <div className="sector-demo">
      <section className="sd-hero">
        <motion.img
          className="sd-hero__bg"
          src="/media/sector-demo-hero.jpg"
          alt=""
          aria-hidden="true"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={homeTween(0, 0.9)}
        />
        <div className="sd-hero__veil" aria-hidden="true" />
        <div className="wrap sd-hero__inner">
          <HomeStagger>
            <HomeItem index={0} as="p" className="sd-hero__eyebrow" tone="soft">
              {t.nav.find((item) => item.id === 'sectors')?.label ?? 'Sectors'}
            </HomeItem>
            <HomeItem index={1} as="h1" className="sd-hero__title">
              {s.title}
            </HomeItem>
            <HomeItem index={2} as="p" className="sd-hero__body" tone="soft">
              {s.subtitle}
            </HomeItem>
          </HomeStagger>
        </div>
      </section>

      <section className="sd-cards-wrap">
        <div className="wrap sd-cards">
          {cards.map(({ label, body, Icon }, i) => (
            <HomeItem
              key={label}
              as="article"
              className="sd-card"
              index={i}
              baseDelay={0.06}
              stagger={0.1}
            >
              <Icon className="sd-card__icon" />
              <h2 className="sd-card__title">{label}</h2>
              <p className="sd-card__body">{body}</p>
            </HomeItem>
          ))}
        </div>
      </section>

      <section className="sd-statement">
        <div className="wrap">
          <HomeReveal as="p" className="sd-statement__text">
            {s.subtitle.includes(':') ? (
              <>
                {s.subtitle.slice(0, s.subtitle.indexOf(':') + 1)}{' '}
                <em>{s.subtitle.slice(s.subtitle.indexOf(':') + 1).trim().replace(/\.$/, '')}</em>.
              </>
            ) : (
              s.subtitle
            )}
          </HomeReveal>
        </div>
      </section>

      <section className="sd-problem-intro">
        <div className="wrap">
          <HomeReveal className="sd-problem-box" delay={0.06}>
            <h2 className="sd-problem-box__title">{problemTitle}</h2>
          </HomeReveal>
        </div>
      </section>

      {/* 1 — Energy (image + overlapping panel) */}
      <section className="sd-step sd-step--media">
        <div className="wrap sd-step__grid">
          <HomeReveal className="sd-step__media" delay={0.05}>
            <img src={energy.image} alt="" />
          </HomeReveal>
          <HomeReveal className="sd-step__panel" delay={0.16}>
            <p className="sd-step__num" aria-hidden="true">
              1.
            </p>
            <h3 className="sd-step__title">{energy.title}</h3>
            <hr className="sd-step__rule" />
            <p className="sd-step__body">{energy.body}</p>
          </HomeReveal>
        </div>
      </section>

      {/* 2 — Extractive (centered, no image) */}
      <section className="sd-step sd-step--center">
        <HomeStagger className="wrap sd-step__center">
          <HomeItem
            index={0}
            as="p"
            className="sd-step__digit"
            aria-hidden="true"
            baseDelay={0.04}
          >
            2
          </HomeItem>
          <HomeItem index={1} className="sd-step__head" baseDelay={0.04}>
            <h3 className="sd-step__title">{extractive.title}</h3>
            <div className="sd-step__rule-row" aria-hidden="true">
              <span className="sd-step__dot" />
              <span className="sd-step__rule-line" />
            </div>
          </HomeItem>
          <HomeItem
            index={2}
            as="p"
            className="sd-step__body"
            tone="soft"
            baseDelay={0.04}
          >
            {extractive.body}
          </HomeItem>
        </HomeStagger>
      </section>

      {/* 3 — Security (image + overlapping panel) */}
      <section className="sd-step sd-step--media">
        <div className="wrap sd-step__grid">
          <HomeReveal className="sd-step__media" delay={0.05}>
            <img src={security.image} alt="" />
          </HomeReveal>
          <HomeReveal className="sd-step__panel" delay={0.16}>
            <p className="sd-step__num" aria-hidden="true">
              3.
            </p>
            <h3 className="sd-step__title">{security.title}</h3>
            <hr className="sd-step__rule" />
            <p className="sd-step__body">{security.body}</p>
          </HomeReveal>
        </div>
      </section>

      <section className="sd-enablers">
        <div className="wrap">
          <HomeStagger className="sd-enablers__head">
            <HomeItem index={0} as="p" className="sd-enablers__label" tone="soft">
              {s.enablersLabel}
            </HomeItem>
            <HomeItem index={1} as="h2" className="sd-enablers__title">
              {s.enablersTitle}
            </HomeItem>
          </HomeStagger>
          <div className="sd-enablers__grid">
            <HomeItem as="article" className="sd-enablers__item" index={0} baseDelay={0.08}>
              <p className="sd-enablers__num" aria-hidden="true">
                01
              </p>
              <h3 className="sd-enablers__item-title">{s.technology.title}</h3>
              <p className="sd-enablers__body">{s.technology.body}</p>
            </HomeItem>
            <HomeItem as="article" className="sd-enablers__item" index={1} baseDelay={0.08}>
              <p className="sd-enablers__num" aria-hidden="true">
                02
              </p>
              <h3 className="sd-enablers__item-title">{s.finance.title}</h3>
              <p className="sd-enablers__body">{s.finance.body}</p>
            </HomeItem>
          </div>
        </div>
      </section>

      <section className="sd-cta">
        <HomeStagger className="wrap sd-cta__inner">
          <HomeItem index={0} as="p" className="sd-cta__label" tone="soft">
            {t.home.closeLabel}
          </HomeItem>
          <HomeItem index={1} as="h2" className="sd-cta__title">
            {t.home.ctaTitle}
          </HomeItem>
          <HomeItem index={2} as="p" className="sd-cta__body" tone="soft">
            {t.home.ctaBody}
          </HomeItem>
          <HomeItem index={3} baseDelay={0.08}>
            <Link to={routes.contact} className="sd-cta__btn">
              {t.hero.primary}
            </Link>
          </HomeItem>
        </HomeStagger>
      </section>
    </div>
  )
}
