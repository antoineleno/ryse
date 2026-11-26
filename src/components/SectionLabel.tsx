export function SectionLabel({
  children,
  light = false,
}: {
  children: string
  light?: boolean
}) {
  return (
    <p className={`eyebrow ${light ? '!text-bronzeh' : ''}`}>{children}</p>
  )
}
