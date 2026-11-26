import { Reveal } from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export function Board() {
  const { t } = useLanguage()
  const b = t.board

  return (
    <section className="bg-ivory">
      <div className="board-pro">
        <div className="wrap">
          <Reveal className="board-pro__head">
            <p className="eyebrow">{b.eyebrow}</p>
            <h1 className="board-pro__title">{b.title}</h1>
            <p className="board-pro__lead">{b.subtitle}</p>
            <span className="board-pro__rule" aria-hidden />
          </Reveal>

          <div className="board-pro__list">
            {b.members.map((member, i) => (
              <Reveal
                key={member.name}
                delay={i * 0.06}
                as="article"
                className={`board-pro__member${i % 2 === 1 ? ' is-flip' : ''}`}
              >
                <div className="board-pro__portrait">
                  <img
                    src={member.image}
                    alt=""
                    className="board-pro__img"
                  />
                  <span className="board-pro__index" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="board-pro__copy">
                  <p className="board-pro__role">{member.role}</p>
                  <h2 className="board-pro__name">{member.name}</h2>
                  <p className="board-pro__bio">{member.bio}</p>
                  <ul className="board-pro__creds">
                    {member.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
