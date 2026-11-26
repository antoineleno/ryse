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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-20 border-b border-fline bg-forest text-onf">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-4 px-5 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
          {navRoutes.map((item) => {
            const label = t.nav.find((n) => n.id === item.id)?.label ?? item.id
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className="nav-link"
                data-active={pathname === item.path}
              >
                {label}
              </NavLink>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="flex border border-fline p-0.5"
            role="group"
            aria-label="Language"
          >
            {(['en', 'fr'] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`font-label px-2.5 py-1.5 text-[11px] font-bold tracking-[1px] uppercase ${
                  lang === code
                    ? 'bg-bronzel text-ink'
                    : 'bg-transparent text-onf2'
                }`}
                aria-pressed={lang === code}
              >
                {code}
              </button>
            ))}
          </div>

          <NavLink to={routes.contact} className="btn-ryse solid sm hidden sm:inline-block">
            {t.contactCta}
          </NavLink>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-fline text-onf xl:hidden"
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
            className="border-t border-fline bg-forest xl:hidden"
          >
            <nav className="flex flex-col px-5 py-4">
              {navRoutes.map((item) => {
                const label = t.nav.find((n) => n.id === item.id)?.label ?? item.id
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className="border-b border-fline/60 py-3.5 font-label text-[11px] tracking-[1.6px] text-onf2 uppercase"
                    data-active={pathname === item.path}
                  >
                    {label}
                  </NavLink>
                )
              })}
              <NavLink
                to={routes.contact}
                className="btn-ryse solid mt-5 text-center"
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
