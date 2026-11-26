import { motion, useReducedMotion } from 'framer-motion'

/** Stylised West Africa corridor vector — Conakry & Lomé highlighted. */
export function WestAfricaMap({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion()

  return (
    <svg
      viewBox="0 0 520 360"
      className={className}
      role="img"
      aria-label="West Africa corridor from Conakry to Lomé"
    >
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1F3029" />
          <stop offset="100%" stopColor="#17251F" />
        </linearGradient>
      </defs>
      <rect width="520" height="360" fill="url(#sea)" />

      {/* Simplified coastal landmass */}
      <path
        d="M40 70 C90 40 150 55 190 85 C230 50 290 45 340 70 C390 40 450 55 500 90 L500 300 C430 270 360 285 300 310 C240 285 180 295 120 320 C80 300 50 280 40 250 Z"
        fill="#24362E"
        stroke="#A9824F"
        strokeWidth="1"
        opacity="0.95"
      />
      <path
        d="M70 110 C120 95 160 115 200 130 C250 105 310 100 360 125 C410 110 455 125 490 145"
        fill="none"
        stroke="#C29A62"
        strokeWidth="1.2"
        strokeDasharray="5 7"
        opacity="0.7"
      />

      {/* Corridor route */}
      <motion.path
        d="M145 195 C210 170 280 175 360 205"
        fill="none"
        stroke="#A9824F"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        initial={reduce ? false : { pathLength: 0, opacity: 0.2 }}
        whileInView={{ pathLength: 1, opacity: 0.9 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      />

      {/* Conakry */}
      <g>
        <motion.circle
          cx="145"
          cy="195"
          r="7"
          fill="#C29A62"
          initial={reduce ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 220 }}
        />
        {!reduce ? (
          <motion.circle
            cx="145"
            cy="195"
            r="7"
            fill="none"
            stroke="#C29A62"
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{ scale: 2.4, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeOut' }}
          />
        ) : null}
        <text
          x="145"
          y="222"
          textAnchor="middle"
          fill="#F1E9DC"
          fontFamily="Manrope, system-ui, sans-serif"
          fontSize="11"
          fontWeight="600"
          letterSpacing="1.5"
        >
          CONAKRY
        </text>
      </g>

      {/* Lomé */}
      <g>
        <motion.circle
          cx="360"
          cy="205"
          r="7"
          fill="#C29A62"
          initial={reduce ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, type: 'spring', stiffness: 220 }}
        />
        {!reduce ? (
          <motion.circle
            cx="360"
            cy="205"
            r="7"
            fill="none"
            stroke="#C29A62"
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{ scale: 2.4, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeOut', delay: 0.4 }}
          />
        ) : null}
        <text
          x="360"
          y="232"
          textAnchor="middle"
          fill="#F1E9DC"
          fontFamily="Manrope, system-ui, sans-serif"
          fontSize="11"
          fontWeight="600"
          letterSpacing="1.5"
        >
          LOMÉ
        </text>
      </g>

      <text
        x="40"
        y="340"
        fill="#AEB6AA"
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="10"
        fontWeight="600"
        letterSpacing="2"
      >
        WEST AFRICA CORRIDOR
      </text>
    </svg>
  )
}
