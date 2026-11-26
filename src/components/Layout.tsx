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
      <main className="min-w-0 animate-[fadeRise_0.45s_cubic-bezier(0.22,1,0.36,1)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
