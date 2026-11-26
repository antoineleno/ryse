import { MediaFrame } from '../components/MediaFrame'
import { Reveal } from '../components/Reveal'
import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../context/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section className="bg-ivory">
      <PageHeader eyebrow={a.eyebrow} title={a.title}>
        <p>{a.intro}</p>
      </PageHeader>

      <div className="blk">
        <div className="wrap grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
          <Reveal>
            <p className="lead">{a.body}</p>
            <p className="mt-4 text-ink2">{a.body2}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <MediaFrame src="/media/about-landscape.jpg" aspect="aspect-[4/5] md:aspect-[4/5]" />
          </Reveal>
        </div>
      </div>

      <div className="blk">
        <div className="wrap mv">
          <Reveal>
            <p className="eyebrow">{a.missionLabel}</p>
            <h3>{a.missionTitle}</h3>
            <p>{a.missionBody}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow">{a.visionLabel}</p>
            <h3>{a.visionTitle}</h3>
            <p>{a.visionBody}</p>
          </Reveal>
        </div>
      </div>

      <div className="blk">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">{a.valuesLabel}</p>
          </Reveal>
          <div className="values">
            {a.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.05}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="band">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">{a.whyLabel}</p>
            <h2>{a.whyTitle}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>{a.whyBody}</p>
            <p className="line">
              {a.whyKeywords.map((k) => (
                <span key={k}>{k}</span>
              ))}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
