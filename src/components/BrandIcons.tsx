import type { ReactNode } from 'react'

type IconProps = {
  className?: string
  title?: string
}

function frame({ className = '', title, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconExtractive(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <path {...stroke} d="M8 40h32" />
        <path {...stroke} d="M12 40V28l8-10 8 6 8-12v28" />
        <path {...stroke} d="M20 40v-8h8v8" />
      </>
    ),
  })
}

export function IconEnergy(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <circle {...stroke} cx="24" cy="18" r="7" />
        <path {...stroke} d="M24 8v-2M24 30v2M10 18H8M40 18h-2M13.5 10.5l-1.5-1.5M36 29l-1.5-1.5M13.5 25.5 12 27M36 7l-1.5 1.5" />
        <path {...stroke} d="M16 40h16M20 34h8v6h-8z" />
      </>
    ),
  })
}

export function IconSecurity(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <path {...stroke} d="M24 6 38 12v10c0 10-6.5 16.5-14 18-7.5-1.5-14-8-14-18V12z" />
        <path {...stroke} d="M18 24l4 4 8-9" />
      </>
    ),
  })
}

export function IconFinance(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <rect {...stroke} x="8" y="12" width="32" height="24" rx="1" />
        <path {...stroke} d="M8 20h32M16 12v24M28 28h6M28 32h4" />
      </>
    ),
  })
}

export function IconPolicy(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <path {...stroke} d="M14 8h14l8 8v24H14z" />
        <path {...stroke} d="M28 8v8h8M18 24h12M18 30h12M18 36h8" />
      </>
    ),
  })
}

export function IconDefine(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <circle {...stroke} cx="24" cy="24" r="14" />
        <circle {...stroke} cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
        <path {...stroke} d="M24 10v4M24 34v4M10 24h4M34 24h4" />
      </>
    ),
  })
}

export function IconUnderstand(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <circle {...stroke} cx="24" cy="18" r="7" />
        <path {...stroke} d="M10 40c2.5-8 8-12 14-12s11.5 4 14 12" />
      </>
    ),
  })
}

export function IconAssess(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <path {...stroke} d="M10 34V14h28v20" />
        <path {...stroke} d="M16 28l6-8 5 5 7-10" />
        <path {...stroke} d="M10 34h28" />
      </>
    ),
  })
}

export function IconConnect(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <circle {...stroke} cx="14" cy="18" r="5" />
        <circle {...stroke} cx="34" cy="16" r="5" />
        <circle {...stroke} cx="24" cy="34" r="5" />
        <path {...stroke} d="M18.5 20.5 29.5 17.5M17 22l5 8M31 20l-5 10" />
      </>
    ),
  })
}

export function IconExecute(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <path {...stroke} d="M12 36 24 8l12 28" />
        <path {...stroke} d="M16.5 26h15" />
        <path {...stroke} d="M24 8v6" />
      </>
    ),
  })
}

export function IconPin(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <path {...stroke} d="M24 42c0 0-12-14-12-22a12 12 0 1 1 24 0c0 8-12 22-12 22z" />
        <circle {...stroke} cx="24" cy="20" r="4" />
      </>
    ),
  })
}

export function IconCompass(props: IconProps) {
  return frame({
    ...props,
    children: (
      <>
        <circle {...stroke} cx="24" cy="24" r="16" />
        <path {...stroke} d="M24 10v3M24 35v3M10 24h3M35 24h3" />
        <path fill="currentColor" stroke="none" d="M24 16l4 12-4-2-4 2z" opacity=".9" />
      </>
    ),
  })
}

export const sectorIcons = [IconExtractive, IconEnergy, IconSecurity, IconFinance] as const
export const approachIcons = [
  IconDefine,
  IconUnderstand,
  IconAssess,
  IconConnect,
  IconExecute,
] as const
