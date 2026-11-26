import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { tween } from '../lib/motion'

/** Site-wide scroll reveal via useInView + animate. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
}) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const Component =
    as === 'section'
      ? motion.section
      : as === 'article'
        ? motion.article
        : as === 'li'
          ? motion.li
          : motion.div

  if (reduce) {
    return <Component className={className}>{children}</Component>
  }

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={tween(delay, 0.75)}
    >
      {children}
    </Component>
  )
}
