import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-fline bg-forest text-onf2">
      <div className="wrap flex flex-col gap-3 py-7 md:flex-row md:items-center md:justify-between">
        <small className="text-[12.5px]">{t.brand.footer}</small>
        <a
          href="mailto:contact@ryseglobalinc.com"
          className="text-[12.5px] text-bronzeh transition-colors hover:text-onf"
        >
          contact@ryseglobalinc.com
        </a>
      </div>
    </footer>
  )
}
