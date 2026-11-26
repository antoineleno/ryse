import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Hero() {
  const { t } = useLanguage()
  const lines = t.hero.titleLines
  const reduce = useReducedMotion()

  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t.hero.eyebrow}
          </motion.p>

          <h1 className="hero__title">
            {lines.map((line, i) => (
              <motion.span
                key={line}
                className={`hero__line${i === 1 ? ' is-accent' : ''}`}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 + i * 0.09 }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="hero__body"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            {t.hero.body}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <Link to={routes.contact} className="btn-ryse solid !text-ink">
              {t.hero.primary}
            </Link>
            <Link to={routes.approach} className="hero__link">
              {t.hero.secondary}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero__media"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="hero__frame">
            <img
              src="/media/approach-meeting.jpg"
              alt=""
              className="hero__img"
            />
          </div>

          <div className="hero__card">
            <p className="font-label text-[10px] font-semibold tracking-[2px] text-bronze uppercase">
              {t.home.practiceLabel}
            </p>
            <div className="mt-3 space-y-2">
              {t.home.practiceTags.map((tag) => (
                <div key={tag} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-bronzel" />
                  <span className="text-[13px] text-ink">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
