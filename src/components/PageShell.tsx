import type { ReactNode } from 'react'

/** Tops out content under the fixed header on non-home pages. */
export function PageShell({ children }: { children: ReactNode }) {
  return <div className="pt-[68px] md:pt-[72px]">{children}</div>
}
