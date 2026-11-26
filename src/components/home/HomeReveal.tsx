import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  fadeSoft,
  fadeUp,
  homeTween,
  imageIn,
  ruleDraw,
  staggerBlock,
  viewportOnce,
} from '../../lib/homeMotion'

/**
 * One scroll-triggered fade-up unit.
 * Prefer wrapping a whole column/block — avoid nesting HomeReveal inside HomeReveal.
 */
export function HomeReveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: {
  children?: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'span'
}) {
  const reduce = useReducedMotion()
  const Component =
    as === 'section'
      ? motion.section
      : as === 'article'
        ? motion.article
        : as === 'li'
          ? motion.li
          : as === 'span'
            ? motion.span
            : motion.div

  return (
    <Component
      className={className}
      variants={reduce ? undefined : fadeUp}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={viewportOnce}
      transition={homeTween(delay, 0.7)}
    >
      {children}
    </Component>
  )
}

/**
 * Staggered children for lists and intro stacks.
 * Children must use HomeItem (or variants={fadeUp}).
 */
export function HomeStagger({
  children,
  className = '',
  stagger = 0.08,
  delay = 0.02,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  as?: 'div' | 'ol' | 'ul' | 'dl'
}) {
  const reduce = useReducedMotion()
  const Component =
    as === 'ol'
      ? motion.ol
      : as === 'ul'
        ? motion.ul
        : as === 'dl'
          ? motion.dl
          : motion.div

  return (
    <Component
      className={className}
      variants={reduce ? undefined : staggerBlock(stagger, delay)}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={viewportOnce}
    >
      {children}
    </Component>
  )
}

export function HomeItem({
  children,
  className = '',
  as = 'div',
  tone = 'up',
  'aria-hidden': ariaHidden,
}: {
  children?: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article' | 'span' | 'p' | 'h2' | 'h3'
  tone?: 'up' | 'soft' | 'rule'
  'aria-hidden'?: boolean | 'true' | 'false'
}) {
  const reduce = useReducedMotion()
  const variants = tone === 'rule' ? ruleDraw : tone === 'soft' ? fadeSoft : fadeUp
  const Component =
    as === 'li'
      ? motion.li
      : as === 'article'
        ? motion.article
        : as === 'span'
          ? motion.span
          : as === 'p'
            ? motion.p
            : as === 'h2'
              ? motion.h2
              : as === 'h3'
                ? motion.h3
                : motion.div

  return (
    <Component
      className={className}
      variants={reduce ? undefined : variants}
      aria-hidden={ariaHidden}
      style={
        tone === 'rule'
          ? ({ originX: 0, transformOrigin: 'left center' } as const)
          : undefined
      }
    >
      {children}
    </Component>
  )
}

/** Soft image entrance — opacity + rise only (no competing scale layers). */
export function HomeImage({
  src,
  alt = '',
  className = '',
  delay = 0.06,
}: {
  src: string
  alt?: string
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : imageIn}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={viewportOnce}
      transition={homeTween(delay, 0.85)}
      style={{ overflow: 'hidden' }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </motion.div>
  )
}
