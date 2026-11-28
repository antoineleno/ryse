import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { homeTween } from '../../lib/motion'

type As =
  | 'div'
  | 'section'
  | 'article'
  | 'li'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'ol'
  | 'ul'
  | 'dl'

function pick(as: As) {
  switch (as) {
    case 'section':
      return motion.section
    case 'article':
      return motion.article
    case 'li':
      return motion.li
    case 'span':
      return motion.span
    case 'p':
      return motion.p
    case 'h1':
      return motion.h1
    case 'h2':
      return motion.h2
    case 'h3':
      return motion.h3
    case 'ol':
      return motion.ol
    case 'ul':
      return motion.ul
    case 'dl':
      return motion.dl
    default:
      return motion.div
  }
}

const viewport = {
  once: true,
  amount: 0.18 as const,
  margin: '0px 0px -8% 0px' as const,
}

type RevealTone = 'up' | 'soft' | 'media' | 'rule'

function hiddenState(tone: RevealTone) {
  if (tone === 'soft') return { opacity: 0 }
  if (tone === 'media') return { opacity: 0, scale: 1.04 }
  if (tone === 'rule') return { opacity: 0, scaleX: 0 }
  return { opacity: 0, y: 26 }
}

function shownState(tone: RevealTone) {
  if (tone === 'soft') return { opacity: 1 }
  if (tone === 'media') return { opacity: 1, scale: 1 }
  if (tone === 'rule') return { opacity: 1, scaleX: 1 }
  return { opacity: 1, y: 0 }
}

function durationFor(tone: RevealTone) {
  if (tone === 'media') return 1.05
  if (tone === 'soft') return 0.85
  if (tone === 'rule') return 0.55
  return 0.72
}

/** Single block — whileInView (reliable across hash / HMR). */
export function HomeReveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  tone = 'up',
}: {
  children?: ReactNode
  className?: string
  delay?: number
  as?: As
  /** `soft` fade · `up` rise · `media` soft zoom · `rule` draw */
  tone?: Exclude<RevealTone, 'rule'>
}) {
  const reduce = useReducedMotion()
  const Component = pick(as)

  if (reduce) {
    return <Component className={className}>{children}</Component>
  }

  return (
    <Component
      className={className}
      initial={hiddenState(tone)}
      whileInView={shownState(tone)}
      viewport={viewport}
      transition={homeTween(delay, durationFor(tone))}
      style={tone === 'media' ? { transformOrigin: 'center center' } : undefined}
    >
      {children}
    </Component>
  )
}

/** Plain wrapper — children animate themselves. */
export function HomeStagger({
  children,
  className = '',
  as = 'div',
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  as?: 'div' | 'ol' | 'ul' | 'dl'
}) {
  const Component =
    as === 'ol' ? 'ol' : as === 'ul' ? 'ul' : as === 'dl' ? 'dl' : 'div'
  return <Component className={className}>{children}</Component>
}

/** Staggered child with index-based delay. */
export function HomeItem({
  children,
  className = '',
  as = 'div',
  tone = 'up',
  index = 0,
  stagger = 0.08,
  baseDelay = 0.05,
  /** Play on mount (hero-adjacent) instead of waiting for scroll into view. */
  eager = false,
  'aria-hidden': ariaHidden,
}: {
  children?: ReactNode
  className?: string
  as?: As
  tone?: RevealTone
  index?: number
  stagger?: number
  baseDelay?: number
  eager?: boolean
  'aria-hidden'?: boolean | 'true' | 'false'
}) {
  const reduce = useReducedMotion()
  const Component = pick(as)
  const delay = baseDelay + index * stagger

  if (reduce) {
    return (
      <Component className={className} aria-hidden={ariaHidden}>
        {children}
      </Component>
    )
  }

  const motionProps = eager
    ? {
        initial: hiddenState(tone),
        animate: shownState(tone),
      }
    : {
        initial: hiddenState(tone),
        whileInView: shownState(tone),
        viewport,
      }

  if (tone === 'rule') {
    return (
      <Component
        className={className}
        aria-hidden={ariaHidden}
        style={{ originX: 0, transformOrigin: 'center center' }}
        {...(eager
          ? {
              initial: hiddenState('rule'),
              animate: shownState('rule'),
            }
          : {
              initial: hiddenState('rule'),
              whileInView: shownState('rule'),
              viewport,
            })}
        transition={homeTween(delay, durationFor('rule'))}
      />
    )
  }

  return (
    <Component
      className={className}
      aria-hidden={ariaHidden}
      {...motionProps}
      transition={homeTween(delay, durationFor(tone))}
      style={tone === 'media' ? { transformOrigin: 'center center' } : undefined}
    >
      {children}
    </Component>
  )
}

/** Image fade + soft parallax. */
export function HomeImage({
  src,
  alt = '',
  className = '',
  delay = 0.08,
  objectPosition = '50% 50%',
}: {
  src: string
  alt?: string
  className?: string
  delay?: number
  objectPosition?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ['0%', '0%'] : ['-5%', '5%'],
  )

  if (reduce) {
    return (
      <div className={className} style={{ overflow: 'hidden' }}>
        <img
          src={src}
          alt={alt}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition,
          }}
        />
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ overflow: 'hidden' }}
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={homeTween(delay, 1.05)}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          display: 'block',
          width: '100%',
          height: '118%',
          objectFit: 'cover',
          objectPosition,
          y,
          willChange: 'transform',
        }}
      />
    </motion.div>
  )
}

export function HomeSection({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}
