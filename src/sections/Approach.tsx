import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Approach() {
  const { t } = useLanguage()
  const a = t.approach

  return (
    <section className="bg-ivory">
      <PageHeader eyebrow={a.eyebrow} title={a.title}>
        <p className="q">{a.subtitle}</p>
      </PageHeader>

      <div className="blk">
        <div className="wrap">
          <div className="flow">
            {a.steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 0.05}
                className={`box${i === 0 ? ' first' : ''}`}
              >
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>
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
              <Link to={routes.experts} className="more !text-[#F1E9DC]">
                {a.networkCta}
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
