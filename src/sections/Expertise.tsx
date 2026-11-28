import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HomeItem,
  HomeReveal,
  HomeStagger,
} from '../components/home/HomeReveal'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'
import { Hero } from './Hero'

const practiceImages = [
  '/media/practice-foresight.jpg',
  '/media/practice-market.jpg',
  '/media/practice-partners.jpg',
  '/media/expertise-practice-4.jpg',
] as const

export function Expertise() {
  const { t } = useLanguage()
  const e = t.expertise
  const [openHelp, setOpenHelp] = useState<number | null>(null)

  return (
    <div className="expertise-page">
      <Hero
        eyebrow={e.eyebrow}
        titleLines={e.titleLines}
        body={e.subtitle}
        image="/media/expertise-hero.jpg?v=restore1"
      />

      {/* Leading practice + audiences — one continuous session */}
      <section className="ex-session" id="leading">
        <div className="wrap ex-lead__grid">
          <HomeStagger className="ex-lead__copy">
            <HomeItem
              index={0}
              as="p"
              className="ex-eyebrow"
              tone="soft"
              baseDelay={0.04}
              stagger={0.09}
            >
              {e.leadingLabel}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ex-lead__title"
              baseDelay={0.04}
              stagger={0.09}
            >
              {e.leadingTitle}
            </HomeItem>
            <HomeItem
              index={2}
              as="span"
              className="ex-rule"
              tone="rule"
              baseDelay={0.22}
            />
            <HomeItem
              index={3}
              as="p"
              className="ex-lead__body"
              tone="soft"
              baseDelay={0.04}
              stagger={0.09}
            >
              {e.leadingBody}
            </HomeItem>
          </HomeStagger>
          <HomeReveal className="ex-lead__media" delay={0.12} tone="soft">
            <img src="/media/expertise-leading.jpg" alt="" />
          </HomeReveal>
        </div>

        <div className="wrap ex-sides__grid">
          <HomeReveal className="ex-sides__panel" delay={0.06}>
            <p className="ex-sides__num" aria-hidden="true">
              01
            </p>
            <h3 className="ex-sides__title">{e.govTitle}</h3>
            <hr className="ex-sides__rule" />
            <p className="ex-sides__body">{e.govBody}</p>
          </HomeReveal>
          <HomeReveal className="ex-sides__panel" delay={0.16}>
            <p className="ex-sides__num" aria-hidden="true">
              02
            </p>
            <h3 className="ex-sides__title">{e.privateTitle}</h3>
            <hr className="ex-sides__rule" />
            <p className="ex-sides__body">{e.privateBody}</p>
          </HomeReveal>
        </div>
      </section>

      {/* Capability index */}
      <section className="ex-help">
        <div className="wrap">
          <HomeStagger className="ex-help__head">
            <HomeItem
              index={0}
              as="p"
              className="ex-eyebrow"
              tone="soft"
              baseDelay={0.04}
              stagger={0.09}
            >
              {e.whereHelpLabel}
            </HomeItem>
            <HomeItem
              index={1}
              as="span"
              className="ex-rule"
              tone="rule"
              baseDelay={0.18}
            />
          </HomeStagger>
          <ol className="ex-help__list">
            {e.whereHelp.map((item, i) => {
              const open = openHelp === i
              const panelId = `ex-help-panel-${i}`
              const buttonId = `ex-help-btn-${i}`
              return (
                <HomeItem
                  key={item.title}
                  as="li"
                  className={`ex-help__item${open ? ' is-open' : ''}`}
                  index={i}
                  baseDelay={0.05}
                  stagger={0.05}
                >
                  <button
                    type="button"
                    id={buttonId}
                    className="ex-help__trigger"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenHelp(open ? null : i)}
                  >
                    <span className="ex-help__idx" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="ex-help__label">{item.title}</span>
                    <span className="ex-help__chev" aria-hidden="true" />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="ex-help__panel"
                    hidden={!open}
                  >
                    <p className="ex-help__body">{item.body}</p>
                  </div>
                </HomeItem>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Other practices — alternating image rows */}
      <section className="ex-practices">
        <div className="wrap">
          <HomeStagger className="ex-practices__head">
            <HomeItem
              index={0}
              as="p"
              className="ex-eyebrow"
              tone="soft"
              baseDelay={0.04}
              stagger={0.09}
            >
              {e.practicesLabel}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ex-practices__title"
              baseDelay={0.04}
              stagger={0.09}
            >
              {e.practicesTitle}
            </HomeItem>
          </HomeStagger>

          <div className="ex-practices__rows">
            {e.practices.map((practice, i) => {
              const flip = i % 2 === 1

              return (
                <article
                  key={practice.title}
                  className={`ex-practices__row${flip ? ' is-flip' : ''}`}
                >
                  <HomeReveal
                    className="ex-practices__media"
                    delay={0.04}
                    tone="soft"
                  >
                    <img
                      src={practiceImages[i] ?? practiceImages[0]}
                      alt=""
                    />
                  </HomeReveal>
                  <HomeStagger className="ex-practices__copy">
                    <HomeItem
                      index={0}
                      as="p"
                      className="ex-practices__num"
                      aria-hidden="true"
                      baseDelay={0.06}
                      stagger={0.08}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </HomeItem>
                    <HomeItem
                      index={1}
                      as="h3"
                      className="ex-practices__item-title"
                      baseDelay={0.06}
                      stagger={0.08}
                    >
                      {practice.title}
                    </HomeItem>
                    <HomeItem
                      index={2}
                      as="span"
                      className="ex-practices__rule"
                      tone="rule"
                      baseDelay={0.2}
                    />
                    <HomeItem
                      index={3}
                      as="p"
                      className="ex-practices__body"
                      tone="soft"
                      baseDelay={0.06}
                      stagger={0.08}
                    >
                      {practice.body}
                    </HomeItem>
                  </HomeStagger>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Clients + CTA */}
      <section className="ex-clients">
        <div className="wrap ex-clients__grid">
          <HomeStagger className="ex-clients__intro">
            <HomeItem
              index={0}
              as="p"
              className="ex-eyebrow"
              tone="soft"
              baseDelay={0.04}
              stagger={0.09}
            >
              {e.clientsLabel}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ex-clients__title"
              baseDelay={0.04}
              stagger={0.09}
            >
              {e.clientsTitle}
            </HomeItem>
            <HomeItem index={2} baseDelay={0.24}>
              <Link to={routes.contact} className="ex-clients__btn">
                {t.hero.primary}
              </Link>
            </HomeItem>
          </HomeStagger>
          <HomeStagger className="ex-clients__aside">
            <HomeItem
              index={0}
              as="p"
              className="ex-clients__body"
              tone="soft"
              baseDelay={0.1}
              stagger={0.08}
            >
              {e.clientsBody}
            </HomeItem>
            <HomeItem index={1} className="ex-clients__types" baseDelay={0.2}>
              {e.clientTypes.map((type) => (
                <span key={type} className="ex-clients__type">
                  {type}
                </span>
              ))}
            </HomeItem>
          </HomeStagger>
        </div>
      </section>
    </div>
  )
}
