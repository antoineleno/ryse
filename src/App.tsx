import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LanguageProvider } from './context/LanguageContext'
import { routes } from './lib/routes'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { ExpertisePage } from './pages/ExpertisePage'
import { ExpertsPage } from './pages/ExpertsPage'
import { Home } from './pages/Home'
import { ProjectsPage } from './pages/ProjectsPage'
import { SectorsPage } from './pages/SectorsPage'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={routes.about} element={<AboutPage />} />
            <Route path={routes.expertise} element={<ExpertisePage />} />
            <Route path={routes.sectors} element={<SectorsPage />} />
            <Route path="/sector-demo" element={<Navigate to={routes.sectors} replace />} />
            <Route path={routes.projects} element={<ProjectsPage />} />
            <Route path="/approach" element={<Navigate to={routes.approach} replace />} />
            <Route path="/where" element={<Navigate to={routes.where} replace />} />
            <Route path="/board" element={<Navigate to={routes.board} replace />} />
            <Route path={routes.experts} element={<ExpertsPage />} />
            <Route path={routes.contact} element={<ContactPage />} />
            <Route path="*" element={<Navigate to={routes.home} replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
