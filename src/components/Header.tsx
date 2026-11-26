import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { navRoutes, routes } from '../lib/routes'
import { Logo } from './Logo'

export function Header() {
  const { t, lang, setLang } = useLanguage()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const isHome = pathname === routes.home

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const overDark = isHome && !scrolled && !open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled || open || !isHome
          ? 'border-b border-ink/8 bg-cream/92 shadow-[0_8px_30px_rgba(26,42,35,0.06)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3.5 md:px-8 lg:px-10">
        <Logo inverted={overDark} />

        <nav className="hidden items-center gap-3.5 xl:flex 2xl:gap-5">
          {navRoutes.map((item) => {
            const label = t.nav.find((n) => n.id === item.id)?.label ?? item.id
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link text-[0.65rem] font-medium uppercase transition-colors ${
                    overDark
                      ? 'text-cream/80 hover:text-cream'
                      : isActive
                        ? 'text-ink'
                        : 'text-ink/80 hover:text-ink'
                  }`
                }
                data-active={pathname === item.path}
              >
                {label}
              </NavLink>
            )
          })}
        </nav>

        <div className="flex items-center gap-2.5 md:gap-3">
          <div
            className={`flex overflow-hidden border text-[0.65rem] font-semibold tracking-[0.14em] ${
              overDark ? 'border-cream/25' : 'border-ink/15'
            }`}
          >
            {(['en', 'fr'] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`px-2.5 py-1.5 uppercase transition-colors ${
                  lang === code
                    ? overDark
                      ? 'bg-cream text-ink'
                      : 'bg-ink text-cream'
                    : overDark
                      ? 'text-cream/75 hover:text-cream'
                      : 'text-ink/70 hover:text-ink'
                }`}
                aria-pressed={lang === code}
              >
                {code}
              </button>
            ))}
          </div>

          <NavLink
            to={routes.contact}
            className="hidden bg-gold px-4 py-2.5 text-[0.65rem] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:bg-gold-deep hover:text-cream sm:inline-flex"
          >
            {t.contactCta}
          </NavLink>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center border xl:hidden ${
              overDark ? 'border-cream/25 text-cream' : 'border-ink/15 text-ink'
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-ink/8 bg-cream xl:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-5">
              {navRoutes.map((item) => {
                const label = t.nav.find((n) => n.id === item.id)?.label ?? item.id
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) =>
                      `border-b border-ink/6 py-3 text-sm tracking-[0.14em] uppercase ${
                        isActive ? 'text-gold-deep' : 'text-ink'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                )
              })}
              <NavLink
                to={routes.contact}
                className="mt-4 bg-gold px-4 py-3 text-center text-[0.7rem] font-semibold tracking-[0.16em] text-ink uppercase"
              >
                {t.contactCta}
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
