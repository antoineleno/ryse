import { Reveal } from '../components/Reveal'
import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../context/LanguageContext'

export function Sectors() {
  const { t } = useLanguage()
  const s = t.sectors

  return (
    <section className="bg-ivory">
      <PageHeader eyebrow={s.eyebrow} title={s.title}>
        <p>{s.subtitle}</p>
      </PageHeader>

      <div className="blk">
        <div className="wrap">
          <div className="sectors">
            {s.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} className="sector">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="enablers">
              <div className="lab">
                <p className="eyebrow">{s.enablersLabel}</p>
                <b>{s.enablersTitle}</b>
              </div>
              <div>
                <h4>{s.technology.title}</h4>
                <p>{s.technology.body}</p>
              </div>
              <div>
                <h4>{s.finance.title}</h4>
                <p>{s.finance.body}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
