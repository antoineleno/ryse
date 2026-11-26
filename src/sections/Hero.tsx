import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Hero() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.35])

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-forest"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="/media/hero-africa.jpg"
          alt=""
          className="h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/92 via-forest/75 to-forest/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-forest/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-center px-5 pt-28 pb-16 md:px-8 md:pb-20 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="max-w-3xl"
        >
          <SectionLabel>{t.hero.eyebrow}</SectionLabel>
          <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[1.05] font-medium tracking-tight text-balance text-cream">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-cream/80">
            {t.hero.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton to={routes.expertise}>{t.hero.primary}</LinkButton>
            <LinkButton
              to={routes.contact}
              variant="ghost"
              className="border-cream/30 text-cream hover:border-gold hover:text-gold-soft"
            >
              {t.hero.secondary}
            </LinkButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16 hidden items-center gap-3 text-cream/50 md:flex"
        >
          <span className="h-px w-10 bg-gold/60" />
          <span className="text-[0.65rem] tracking-[0.22em] uppercase">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
