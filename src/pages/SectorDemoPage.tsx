import { Link } from 'react-router-dom'
import {
  IconEnergy,
  IconExtractive,
  IconSecurity,
} from '../components/BrandIcons'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

const sectorIcons = [IconExtractive, IconEnergy, IconSecurity] as const

export function SectorDemoPage() {
  const { t } = useLanguage()
  const s = t.sectors
  const [extractive, energy, security] = s.items

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

  return (
    <div className="sector-demo">
      <section className="sd-hero">
        <img
          className="sd-hero__bg"
          src="/media/sector-demo-hero.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="sd-hero__veil" aria-hidden="true" />
        <div className="wrap sd-hero__inner">
          <h1 className="sd-hero__title">{s.title}</h1>
          <p className="sd-hero__body">{s.subtitle}</p>
        </div>
      </section>

      <section className="sd-cards-wrap">
        <div className="wrap sd-cards">
          {cards.map(({ label, body, Icon }) => (
            <article key={label} className="sd-card">
              <Icon className="sd-card__icon" />
              <h2 className="sd-card__title">{label}</h2>
              <p className="sd-card__body">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sd-statement">
        <div className="wrap">
          <p className="sd-statement__text">
            {s.subtitle.includes(':') ? (
              <>
                {s.subtitle.slice(0, s.subtitle.indexOf(':') + 1)}{' '}
                <em>{s.subtitle.slice(s.subtitle.indexOf(':') + 1).trim().replace(/\.$/, '')}</em>.
              </>
            ) : (
              s.subtitle
            )}
          </p>
        </div>
      </section>

      <section className="sd-problem-intro">
        <div className="wrap">
          <div className="sd-problem-box">
            <h2 className="sd-problem-box__title">
              {(() => {
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
              })()}
            </h2>
          </div>
        </div>
      </section>

      {/* 1 — Energy (image + overlapping panel) */}
      <section className="sd-step sd-step--media">
        <div className="wrap sd-step__grid">
          <div className="sd-step__media">
            <img src={energy.image} alt="" />
          </div>
          <div className="sd-step__panel">
            <p className="sd-step__num" aria-hidden="true">
              1.
            </p>
            <h3 className="sd-step__title">{energy.title}</h3>
            <hr className="sd-step__rule" />
            <p className="sd-step__body">{energy.body}</p>
          </div>
        </div>
      </section>

      {/* 2 — Extractive (centered, no image) */}
      <section className="sd-step sd-step--center">
        <div className="wrap sd-step__center">
          <p className="sd-step__digit" aria-hidden="true">
            2
          </p>
          <div className="sd-step__head">
            <h3 className="sd-step__title">{extractive.title}</h3>
            <div className="sd-step__rule-row" aria-hidden="true">
              <span className="sd-step__dot" />
              <span className="sd-step__rule-line" />
            </div>
          </div>
          <p className="sd-step__body">{extractive.body}</p>
        </div>
      </section>

      {/* 3 — Security (image + overlapping panel) */}
      <section className="sd-step sd-step--media">
        <div className="wrap sd-step__grid">
          <div className="sd-step__media">
            <img src={security.image} alt="" />
          </div>
          <div className="sd-step__panel">
            <p className="sd-step__num" aria-hidden="true">
              3.
            </p>
            <h3 className="sd-step__title">{security.title}</h3>
            <hr className="sd-step__rule" />
            <p className="sd-step__body">{security.body}</p>
          </div>
        </div>
      </section>

      <section className="sd-cta">
        <div className="wrap sd-cta__inner">
          <Link to={routes.contact} className="sd-cta__btn">
            {t.hero.primary}
          </Link>
        </div>
      </section>
    </div>
  )
}
