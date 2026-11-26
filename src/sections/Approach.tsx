import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { approachIcons } from '../components/BrandIcons'
import { MediaFrame } from '../components/MediaFrame'
import { Reveal } from '../components/Reveal'
import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Approach() {
  const { t } = useLanguage()
  const a = t.approach
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()

  return (
    <section className="bg-ivory">
      <PageHeader eyebrow={a.eyebrow} title={a.title}>
        <p className="q">{a.subtitle}</p>
      </PageHeader>

      <div className="blk">
        <div className="wrap">
          <Reveal className="mb-12 max-w-3xl">
            <MediaFrame src="/media/approach-meeting.jpg" aspect="aspect-[21/9]" />
          </Reveal>

          <div className="flow">
            {a.steps.map((step, i) => {
              const Icon = approachIcons[i] ?? approachIcons[0]
              const isActive = active === i
              const first = i === 0
              return (
                <motion.button
                  key={step.title}
                  type="button"
                  className={`box w-full cursor-pointer text-left transition-colors ${
                    first || isActive ? 'first' : ''
                  }`}
                  style={
                    !first && isActive
                      ? {
                          background: 'var(--forest)',
                          borderColor: 'var(--forest)',
                        }
                      : undefined
                  }
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  whileHover={reduce ? undefined : { y: -3 }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon
                    className={`mb-3 h-8 w-8 ${
                      first || isActive ? 'text-bronzeh' : 'text-bronzel'
                    }`}
                  />
                  <h3
                    className={
                      !first && isActive ? '!text-bronzeh' : undefined
                    }
                  >
                    {step.title}
                  </h3>
                  <p
                    className={
                      !first && isActive ? '!text-[#D3D6CC]' : undefined
                    }
                  >
                    {step.body}
                  </p>
                </motion.button>
              )
            })}
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
