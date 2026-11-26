export const routes = {
  home: '/',
  about: '/about',
  expertise: '/expertise',
  sectors: '/sectors',
  approach: '/approach',
  projects: '/projects',
  where: '/where',
  board: '/board',
  experts: '/experts',
  contact: '/contact',
} as const

export type RouteId = keyof typeof routes

export const navRoutes = [
  { id: 'about', path: routes.about },
  { id: 'expertise', path: routes.expertise },
  { id: 'sectors', path: routes.sectors },
  { id: 'approach', path: routes.approach },
  { id: 'projects', path: routes.projects },
  { id: 'where', path: routes.where },
  { id: 'board', path: routes.board },
  { id: 'experts', path: routes.experts },
] as const
