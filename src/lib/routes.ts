export const routes = {
  home: '/',
  about: '/about',
  expertise: '/expertise',
  sectors: '/sectors',
  projects: '/projects',
  where: '/about#where',
  board: '/about#board',
  mission: '/about#mission',
  network: '/about#network',
  experts: '/experts',
  contact: '/contact',
  sectorDemo: '/sector-demo',
} as const

export type RouteId = keyof typeof routes

export const navRoutes = [
  { id: 'home', path: routes.home },
  { id: 'about', path: routes.about },
  { id: 'expertise', path: routes.expertise },
  { id: 'sectors', path: routes.sectors },
  { id: 'sectorDemo', path: routes.sectorDemo },
  { id: 'projects', path: routes.projects },
  { id: 'experts', path: routes.experts },
] as const
