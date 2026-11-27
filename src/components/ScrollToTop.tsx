import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.replace('#', '')
    let attempts = 0
    let timer = 0

    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      attempts += 1
      if (attempts < 12) {
        timer = window.setTimeout(tryScroll, 50)
      } else {
        window.scrollTo(0, 0)
      }
    }

    timer = window.setTimeout(tryScroll, 40)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}
