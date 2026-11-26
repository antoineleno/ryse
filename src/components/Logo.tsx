import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Logo() {
  const { t } = useLanguage()

  return (
    <Link
      to={routes.home}
      className="site-logo"
      aria-label={`${t.brand.name}, home`}
    >
      <img src="/media/logo-mark.png" alt="" className="site-logo__mark" />
      <span className="site-logo__wordmark">
        <span className="site-logo__name">{t.brand.name}</span>
        <span className="site-logo__tag">{t.brand.tagline}</span>
      </span>
    </Link>
  )
}
