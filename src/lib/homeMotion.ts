import type { Transition, Variants } from 'framer-motion'

/** Calm premium easing — no bounce, no overshoot. */
export const homeEase = [0.22, 1, 0.36, 1] as const

export const homeTween = (delay = 0, duration = 0.7): Transition => ({
  duration,
  delay,
  ease: homeEase,
})

/** Single motion language for the home page: fade + slight rise. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: homeTween(0, 0.7),
  },
}

export const fadeSoft: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: homeTween(0, 0.55),
  },
}

export const ruleDraw: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: homeTween(0, 0.55),
  },
}

export const imageIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: homeTween(0, 0.85),
  },
}

export const staggerBlock = (stagger = 0.09, delayChildren = 0.04): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

export const viewportOnce = {
  once: true,
  amount: 0.18,
  margin: '0px 0px -6% 0px',
} as const
