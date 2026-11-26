import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconCompass } from '../components/BrandIcons'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Hero() {
  const { t } = useLanguage()
  const lines = t.hero.titleLines
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-forest text-onf">
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <img
          src="/media/home-landscape.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/92 to-forest/70" />
        <svg
          viewBox="0 0 800 420"
          className="absolute right-[-6%] bottom-[-2px] h-auto w-[min(820px,90%)] max-md:right-[-30%] max-md:w-[150%]"
        >
          <g className="horizon-sun">
            <circle className="fill-none stroke-bronzel" cx="520" cy="420" r="120" opacity=".9" strokeWidth="1" />
            <circle className="fill-none stroke-bronzel" cx="520" cy="420" r="190" opacity=".5" strokeWidth="1" />
            <circle className="fill-none stroke-bronzel" cx="520" cy="420" r="270" opacity=".28" strokeWidth="1" />
            <circle className="fill-none stroke-bronzel" cx="520" cy="420" r="360" opacity=".14" strokeWidth="1" />
          </g>
          <line x1="0" y1="419" x2="800" y2="419" className="stroke-bronzel" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="wrap relative z-[2] py-[104px] pb-[116px] max-md:py-16 max-md:pb-[180px]">
        <motion.p
          className="eyebrow !text-bronzeh"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <IconCompass className="mr-1 inline-block h-3.5 w-3.5 align-[-2px]" />
          {t.hero.eyebrow}
        </motion.p>

        <h1 className="mt-[10px] max-w-[14ch] text-[clamp(44px,6.2vw,84px)] leading-[1.02] text-[#F1E9DC]">
          {lines.map((line, i) => (
            <motion.span
              key={line}
              className={`block ${i === 1 ? 'font-semibold italic text-bronzeh' : ''}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.12 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="mt-[26px] max-w-[54ch] text-[18px] text-[#D3D6CC]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {t.hero.body}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap gap-3.5"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.58 }}
        >
          <Link to={routes.expertise} className="btn-ryse solid">
            {t.hero.primary}
          </Link>
          <Link to={routes.contact} className="btn-ryse ghost">
            {t.hero.secondary}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
