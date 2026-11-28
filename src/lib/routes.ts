export const routes = {
  home: '/',
  about: '/about',
  expertise: '/expertise',
  sectors: '/sectors',
  projects: '/projects',
  where: '/about#where',
  board: '/about#board',
  mission: '/about#mission',
  approach: '/about#approach',
  network: '/about#network',
  experts: '/experts',
  contact: '/contact',
} as const

export type RouteId = keyof typeof routes

export const navRoutes = [
  { id: 'home', path: routes.home },
  { id: 'about', path: routes.about },
  { id: 'expertise', path: routes.expertise },
  { id: 'sectors', path: routes.sectors },
  { id: 'projects', path: routes.projects },
  { id: 'experts', path: routes.experts },
] as const
