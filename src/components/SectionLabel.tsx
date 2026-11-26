import type { ReactNode } from 'react'

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="diamond mb-4 text-[0.72rem] font-medium tracking-[0.22em] text-gold uppercase">
      {children}
    </p>
  )
}
