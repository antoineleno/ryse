import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    document.body.dataset.page = location.pathname
  }, [location.pathname])

  return (
    <div className="min-h-screen min-w-0 overflow-x-clip bg-cream text-ink">
      <ScrollToTop />
      <Header />
      <main className="min-w-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
