import { MediaFrame } from '../components/MediaFrame'
import { Reveal } from '../components/Reveal'
import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../context/LanguageContext'

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects
  const f = p.featured

  return (
    <section className="bg-ivory">
      <PageHeader eyebrow={p.eyebrow} title={p.title}>
        <p>{p.subtitle}</p>
      </PageHeader>

      <div className="blk">
        <div className="wrap">
          <Reveal className="mb-6 sm:mb-8">
            <MediaFrame
              src="/media/project-energy.jpg"
              aspect="aspect-[16/9] sm:aspect-[21/9]"
            />
          </Reveal>
          <Reveal>
            <article className="project">
              <div className="pt">
                <p className="eyebrow">{f.tag}</p>
                <h2>{f.title}</h2>
                <p className="lead">{f.body[0]}</p>
                {f.body.slice(1).map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <dl className="pf">
                {f.meta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
