import { IconPin } from '../components/BrandIcons'
import { MediaFrame } from '../components/MediaFrame'
import { Reveal } from '../components/Reveal'
import { PageHeader } from '../components/PageHeader'
import { WestAfricaMap } from '../components/WestAfricaMap'
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
          <Reveal className="mb-12 overflow-hidden border border-fline">
            <WestAfricaMap className="h-auto w-full" />
          </Reveal>

          <div className="countries">
            {w.locations.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 0.08} className="country group">
                <MediaFrame src={loc.image} aspect="aspect-[16/10]" className="mb-5" />
                <div className="flex items-center gap-2 text-bronze">
                  <IconPin className="h-5 w-5" />
                  <h3 className="!m-0 transition-colors group-hover:text-bronze">
                    {loc.name}
                  </h3>
                </div>
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
