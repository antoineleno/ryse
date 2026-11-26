import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { sectorIcons, IconEnergy, IconFinance } from '../components/BrandIcons'
import { MediaFrame } from '../components/MediaFrame'
import { Reveal } from '../components/Reveal'
import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../context/LanguageContext'

export function Sectors() {
  const { t } = useLanguage()
  const s = t.sectors
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()

  return (
    <section className="bg-ivory">
      <PageHeader eyebrow={s.eyebrow} title={s.title}>
        <p>{s.subtitle}</p>
      </PageHeader>

      <div className="blk">
        <div className="wrap">
          <div className="mb-8 grid gap-5 md:mb-10 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
            <Reveal>
              <MediaFrame src={s.items[active]?.image ?? s.items[0].image} aspect="aspect-[16/10]" />
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col justify-center">
              <p className="font-label text-[11px] font-semibold tracking-[2px] text-bronze uppercase">
                0{active + 1} / 0{s.items.length}
              </p>
              <h3 className="mt-3 font-display text-[clamp(26px,5vw,40px)] text-ink">
                {s.items[active]?.title}
              </h3>
              <p className="mt-4 text-[15px] text-ink2 sm:text-base">
                {s.items[active]?.body}
              </p>
            </Reveal>
          </div>

          <div className="sectors !border-t-0">
            {s.items.map((item, i) => {
              const Icon = sectorIcons[i] ?? sectorIcons[0]
              const isActive = active === i
              return (
                <motion.button
                  key={item.title}
                  type="button"
                  className={`sector w-full cursor-pointer border-0 bg-transparent p-0 text-left transition-colors ${
                    isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  whileHover={reduce ? undefined : { x: 2 }}
                >
                  <Icon className="mb-3 h-8 w-8 text-bronzel" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </motion.button>
              )
            })}
          </div>

          <Reveal>
            <div className="enablers mt-0">
              <div className="lab">
                <p className="eyebrow">{s.enablersLabel}</p>
                <b>{s.enablersTitle}</b>
              </div>
              <div>
                <IconEnergy className="mb-2 h-7 w-7 text-bronzel" />
                <h4>{s.technology.title}</h4>
                <p>{s.technology.body}</p>
              </div>
              <div>
                <IconFinance className="mb-2 h-7 w-7 text-bronzel" />
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
