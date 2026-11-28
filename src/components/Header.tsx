import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { navRoutes, routes } from '../lib/routes'
import { Logo } from './Logo'

export function Header() {
  const { t, lang, setLang } = useLanguage()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 12)
  })

  useEffect(() => {
    setScrolled(window.scrollY > 12)
  }, [pathname])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    document.body.dataset.header = 'solid'
    return () => {
      delete document.body.dataset.header
    }
  }, [])

  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      data-transparent="false"
    >
      <div className="site-header__bar">
        <Logo />

        <nav className="site-nav" aria-label="Main">
          {navRoutes.map((item) => {
            const label = t.nav.find((n) => n.id === item.id)?.label ?? item.id
            const active = pathname === item.path
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className="site-nav__link"
                data-active={active}
                aria-current={active ? 'page' : undefined}
              >
                {label}
              </NavLink>
            )
          })}
        </nav>

        <div className="site-header__actions">
          <div className="site-lang" role="group" aria-label="Language">
            {(['en', 'fr'] as const).map((code, i) => (
              <span key={code} className="contents">
                {i > 0 ? (
                  <span className="site-lang__sep" aria-hidden>
                    /
                  </span>
                ) : null}
                <button
                  type="button"
                  onClick={() => setLang(code)}
                  className="site-lang__btn"
                  data-active={lang === code}
                  aria-pressed={lang === code}
                  aria-label={code === 'en' ? 'English' : 'Français'}
                >
                  {code.toUpperCase()}
                </button>
              </span>
            ))}
          </div>

          <NavLink to={routes.contact} className="site-header__cta">
            {t.contactCta}
          </NavLink>

          <button
            type="button"
            className="site-header__menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="site-header__drawer"
          >
            <nav className="site-header__drawer-nav" aria-label="Mobile">
              {navRoutes.map((item) => {
                const label =
                  t.nav.find((n) => n.id === item.id)?.label ?? item.id
                const active = pathname === item.path
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className="site-header__drawer-link"
                    data-active={active}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </NavLink>
                )
              })}

              <div className="site-header__drawer-foot">
                <div className="site-lang" role="group" aria-label="Language">
                  {(['en', 'fr'] as const).map((code, i) => (
                    <span key={code} className="contents">
                      {i > 0 ? (
                        <span className="site-lang__sep" aria-hidden>
                          /
                        </span>
                      ) : null}
                      <button
                        type="button"
                        onClick={() => setLang(code)}
                        className="site-lang__btn"
                        data-active={lang === code}
                        aria-pressed={lang === code}
                      >
                        {code.toUpperCase()}
                      </button>
                    </span>
                  ))}
                </div>
                <NavLink to={routes.contact} className="site-header__cta">
                  {t.contactCta}
                </NavLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
