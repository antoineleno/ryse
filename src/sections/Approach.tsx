import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Approach() {
  const { t } = useLanguage()
  const a = t.approach

  return (
    <section className="bg-ivory">
      <div className="approach-listen">
        <div className="wrap approach-listen__grid">
          <Reveal className="approach-listen__intro">
            <p className="eyebrow">{a.eyebrow}</p>
            <h1 className="approach-listen__title">{a.title}</h1>
            <p className="approach-listen__body">{a.subtitle}</p>
            <span className="approach-listen__rule" aria-hidden />
          </Reveal>

          <Reveal delay={0.06} className="approach-listen__media">
            <img
              src="/media/approach-listen.jpg"
              alt=""
              className="approach-listen__img"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="approach-listen__steps">
              {a.steps.map((step) => (
                <li key={step.num} className="approach-listen__step">
                  <span className="approach-listen__num">{step.num}</span>
                  <div>
                    <h2 className="approach-listen__step-title">{step.title}</h2>
                    <p className="approach-listen__step-body">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>

      <div className="band">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">{a.networkLabel}</p>
            <h2>{a.networkTitle}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>{a.networkBody}</p>
            <p className="mt-[22px]">
              <Link to={routes.experts} className="more">
                {a.networkCta}
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
