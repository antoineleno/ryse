import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-forest-deep">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
        <p className="text-[0.72rem] tracking-[0.06em] text-cream/75">
          {t.brand.footer}
        </p>
        <a
          href="mailto:contact@ryseglobalinc.com"
          className="text-[0.72rem] tracking-[0.08em] text-gold-soft transition-colors hover:text-cream"
        >
          contact@ryseglobalinc.com
        </a>
      </div>
    </footer>
  )
}
