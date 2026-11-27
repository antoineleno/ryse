import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react'
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

const viewOpts = { once: true, amount: 0.15 as const }

/** True once the node is (or was) in view — layout-sync for above-the-fold. */
function useRevealGate(ref: RefObject<Element | null>) {
  const inView = useInView(ref, viewOpts)
  const [early, setEarly] = useState(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || typeof window === 'undefined') return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 48) {
      setEarly(true)
    }
  }, [ref])

  return early || inView
}

/** Single block — useInView + animate (reliable). */
export function HomeReveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: {
  children?: ReactNode
  className?: string
  delay?: number
  as?: As
}) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const show = useRevealGate(ref)
  const Component = pick(as)

  if (reduce) {
    return <Component className={className}>{children}</Component>
  }

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={homeTween(delay, 0.75)}
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
  const Component = as === 'ol' ? 'ol' : as === 'ul' ? 'ul' : as === 'dl' ? 'dl' : 'div'
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
  'aria-hidden': ariaHidden,
}: {
  children?: ReactNode
  className?: string
  as?: As
  tone?: 'up' | 'soft' | 'rule'
  index?: number
  stagger?: number
  baseDelay?: number
  'aria-hidden'?: boolean | 'true' | 'false'
}) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const show = useRevealGate(ref)
  const Component = pick(as)
  const delay = baseDelay + index * stagger

  if (reduce) {
    return (
      <Component className={className} aria-hidden={ariaHidden}>
        {children}
      </Component>
    )
  }

  if (tone === 'rule') {
    return (
      <Component
        ref={ref}
        className={className}
        aria-hidden={ariaHidden}
        style={{ originX: 0, transformOrigin: 'left center' }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={show ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={homeTween(delay, 0.55)}
      />
    )
  }

  const hidden =
    tone === 'soft' ? { opacity: 0 } : { opacity: 0, y: 28 }
  const shown =
    tone === 'soft' ? { opacity: 1 } : { opacity: 1, y: 0 }

  return (
    <Component
      ref={ref}
      className={className}
      aria-hidden={ariaHidden}
      initial={hidden}
      animate={show ? shown : hidden}
      transition={homeTween(delay, tone === 'soft' ? 0.55 : 0.7)}
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
}: {
  src: string
  alt?: string
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const show = useRevealGate(ref)
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
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ overflow: 'hidden' }}
      initial={{ opacity: 0, y: 24 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={homeTween(delay, 0.85)}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          display: 'block',
          width: '100%',
          height: '118%',
          objectFit: 'cover',
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
