import { Reveal } from '../components/Reveal'
import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../context/LanguageContext'

export function Board() {
  const { t } = useLanguage()
  const b = t.board

  return (
    <section className="bg-ivory">
      <PageHeader eyebrow={b.eyebrow} title={b.title}>
        <p>{b.subtitle}</p>
      </PageHeader>

      <div className="blk">
        <div className="wrap board">
          {b.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06} as="article" className="member">
              <div
                className="mph"
                role="img"
                aria-label={`Portrait of ${member.name}`}
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p>{member.bio}</p>
                <ul className="cred">
                  {member.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
