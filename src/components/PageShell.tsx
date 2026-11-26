import type { ReactNode } from 'react'

/** Sticky forest header already occupies flow space — no extra top pad. */
export function PageShell({ children }: { children: ReactNode }) {
  return <>{children}</>
}
