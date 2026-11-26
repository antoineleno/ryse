import type { Transition } from 'framer-motion'

/** Calm premium easing — no bounce. */
export const easeOut = [0.22, 1, 0.36, 1] as const

export const tween = (delay = 0, duration = 0.7): Transition => ({
  duration,
  delay,
  ease: easeOut,
})

/**
 * Direct whileInView props — more reliable than variant orchestration
 * (stagger parents were leaving items stuck at opacity: 0).
 */
export const revealProps = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12, margin: '0px 0px -40px 0px' as const },
  transition: tween(delay, 0.75),
})

export const fadeProps = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.12, margin: '0px 0px -40px 0px' as const },
  transition: tween(delay, 0.55),
})

export const ruleProps = (delay = 0) => ({
  initial: { opacity: 0, scaleX: 0 },
  whileInView: { opacity: 1, scaleX: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: tween(delay, 0.6),
  style: { originX: 0, transformOrigin: 'left center' as const },
})

export const homeEase = easeOut
export const homeTween = tween
