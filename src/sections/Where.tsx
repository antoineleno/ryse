import { Reveal } from '../components/Reveal'
import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../context/LanguageContext'

export function Where() {
  const { t } = useLanguage()
  const w = t.where

  return (
    <section className="bg-ivory">
      <PageHeader eyebrow={w.eyebrow} title={w.title}>
        <p>{w.subtitle}</p>
      </PageHeader>

      <div className="blk">
        <div className="wrap">
          <div className="countries">
            {w.locations.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 0.08} className="country">
                <h3>{loc.name}</h3>
                <p className="co">{loc.meta}</p>
                <p>{loc.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
