import { IconPolicy } from '../components/BrandIcons'
import { MediaFrame } from '../components/MediaFrame'
import { Reveal } from '../components/Reveal'
import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../context/LanguageContext'

export function Expertise() {
  const { t } = useLanguage()
  const e = t.expertise

  return (
    <section className="bg-ivory">
      <PageHeader eyebrow={e.eyebrow} title={e.title}>
        <p>{e.subtitle}</p>
      </PageHeader>

      <div className="blk">
        <div className="wrap">
          <Reveal className="mb-10">
            <MediaFrame src="/media/expertise-policy.jpg" aspect="aspect-[21/9]" />
          </Reveal>
          <Reveal>
            <div className="feature">
              <div>
                <p className="eyebrow">{e.leadingLabel}</p>
                <div className="mb-3 flex items-center gap-3 text-bronzeh">
                  <IconPolicy className="h-8 w-8" />
                </div>
                <h2>{e.leadingTitle}</h2>
                <p>{e.leadingBody}</p>
                <div className="sides2">
                  <div>
                    <h4>{e.govTitle}</h4>
                    <p>{e.govBody}</p>
                  </div>
                  <div>
                    <h4>{e.privateTitle}</h4>
                    <p>{e.privateBody}</p>
                  </div>
                </div>
              </div>
              <div className="side">
                <h4>{e.whereHelpLabel}</h4>
                <p className="line">
                  {e.whereHelp.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="blk">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">{e.practicesLabel}</p>
          </Reveal>
          <div className="practices mt-6">
            {e.practices.map((practice, i) => (
              <Reveal
                key={practice.title}
                delay={i * 0.05}
                className="group transition-transform duration-300 hover:-translate-y-0.5"
              >
                <h3 className="transition-colors group-hover:text-bronze">
                  {practice.title}
                </h3>
                <p>{practice.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="band">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">{e.clientsLabel}</p>
            <h2>{e.clientsTitle}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>{e.clientsBody}</p>
            <p className="line">
              {e.clientTypes.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
