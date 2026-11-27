import { HomeItem, HomeStagger } from './home/HomeReveal'

/** Shared page hero — same language as home section intros. */
export function PageIntro({
  eyebrow,
  title,
  body,
  as = 'h1',
}: {
  eyebrow: string
  title: string
  body?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <HomeStagger className="page-intro">
      <HomeItem index={0} as="p" className="eyebrow" tone="soft">
        {eyebrow}
      </HomeItem>
      <HomeItem index={1} as={as} className="page-intro__title">
        {title}
      </HomeItem>
      {body ? (
        <HomeItem index={2} as="p" className="page-intro__body">
          {body}
        </HomeItem>
      ) : null}
      <HomeItem
        index={body ? 3 : 2}
        as="span"
        tone="rule"
        className="page-intro__rule"
        aria-hidden
      />
    </HomeStagger>
  )
}
