import { motion, useReducedMotion } from 'framer-motion'

export function MediaFrame({
  src,
  alt = '',
  className = '',
  aspect = 'aspect-[16/10]',
  overlay = true,
}: {
  src: string
  alt?: string
  className?: string
  aspect?: string
  overlay?: boolean
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={`group relative overflow-hidden bg-sand ${aspect} ${className}`}
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ duration: 0.35 }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      {overlay ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60"
          aria-hidden
        />
      ) : null}
      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10"
        aria-hidden
      />
    </motion.div>
  )
}
