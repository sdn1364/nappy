/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TimeTrackerImport } from './routes/time-tracker'
import { Route as HabitTrackerImport } from './routes/habit-tracker'
import { Route as FinanceImport } from './routes/finance'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const FinanceIndexLazyImport = createFileRoute('/finance/')()
const FinanceIncomeLazyImport = createFileRoute('/finance/income')()
const FinanceExpenseLazyImport = createFileRoute('/finance/expense')()
const FinanceCategoriesLazyImport = createFileRoute('/finance/categories')()

// Create/Update Routes

const TimeTrackerRoute = TimeTrackerImport.update({
  path: '/time-tracker',
  getParentRoute: () => rootRoute,
} as any)

const HabitTrackerRoute = HabitTrackerImport.update({
  path: '/habit-tracker',
  getParentRoute: () => rootRoute,
} as any)

const FinanceRoute = FinanceImport.update({
  path: '/finance',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const FinanceIndexLazyRoute = FinanceIndexLazyImport.update({
  path: '/',
  getParentRoute: () => FinanceRoute,
} as any).lazy(() => import('./routes/finance.index.lazy').then((d) => d.Route))

const FinanceIncomeLazyRoute = FinanceIncomeLazyImport.update({
  path: '/income',
  getParentRoute: () => FinanceRoute,
} as any).lazy(() =>
  import('./routes/finance.income.lazy').then((d) => d.Route),
)

const FinanceExpenseLazyRoute = FinanceExpenseLazyImport.update({
  path: '/expense',
  getParentRoute: () => FinanceRoute,
} as any).lazy(() =>
  import('./routes/finance.expense.lazy').then((d) => d.Route),
)

const FinanceCategoriesLazyRoute = FinanceCategoriesLazyImport.update({
  path: '/categories',
  getParentRoute: () => FinanceRoute,
} as any).lazy(() =>
  import('./routes/finance.categories.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/finance': {
      id: '/finance'
      path: '/finance'
      fullPath: '/finance'
      preLoaderRoute: typeof FinanceImport
      parentRoute: typeof rootRoute
    }
    '/habit-tracker': {
      id: '/habit-tracker'
      path: '/habit-tracker'
      fullPath: '/habit-tracker'
      preLoaderRoute: typeof HabitTrackerImport
      parentRoute: typeof rootRoute
    }
    '/time-tracker': {
      id: '/time-tracker'
      path: '/time-tracker'
      fullPath: '/time-tracker'
      preLoaderRoute: typeof TimeTrackerImport
      parentRoute: typeof rootRoute
    }
    '/finance/categories': {
      id: '/finance/categories'
      path: '/categories'
      fullPath: '/finance/categories'
      preLoaderRoute: typeof FinanceCategoriesLazyImport
      parentRoute: typeof FinanceImport
    }
    '/finance/expense': {
      id: '/finance/expense'
      path: '/expense'
      fullPath: '/finance/expense'
      preLoaderRoute: typeof FinanceExpenseLazyImport
      parentRoute: typeof FinanceImport
    }
    '/finance/income': {
      id: '/finance/income'
      path: '/income'
      fullPath: '/finance/income'
      preLoaderRoute: typeof FinanceIncomeLazyImport
      parentRoute: typeof FinanceImport
    }
    '/finance/': {
      id: '/finance/'
      path: '/'
      fullPath: '/finance/'
      preLoaderRoute: typeof FinanceIndexLazyImport
      parentRoute: typeof FinanceImport
    }
  }
}

// Create and export the route tree

interface FinanceRouteChildren {
  FinanceCategoriesLazyRoute: typeof FinanceCategoriesLazyRoute
  FinanceExpenseLazyRoute: typeof FinanceExpenseLazyRoute
  FinanceIncomeLazyRoute: typeof FinanceIncomeLazyRoute
  FinanceIndexLazyRoute: typeof FinanceIndexLazyRoute
}

const FinanceRouteChildren: FinanceRouteChildren = {
  FinanceCategoriesLazyRoute: FinanceCategoriesLazyRoute,
  FinanceExpenseLazyRoute: FinanceExpenseLazyRoute,
  FinanceIncomeLazyRoute: FinanceIncomeLazyRoute,
  FinanceIndexLazyRoute: FinanceIndexLazyRoute,
}

const FinanceRouteWithChildren =
  FinanceRoute._addFileChildren(FinanceRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/finance': typeof FinanceRouteWithChildren
  '/habit-tracker': typeof HabitTrackerRoute
  '/time-tracker': typeof TimeTrackerRoute
  '/finance/categories': typeof FinanceCategoriesLazyRoute
  '/finance/expense': typeof FinanceExpenseLazyRoute
  '/finance/income': typeof FinanceIncomeLazyRoute
  '/finance/': typeof FinanceIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/habit-tracker': typeof HabitTrackerRoute
  '/time-tracker': typeof TimeTrackerRoute
  '/finance/categories': typeof FinanceCategoriesLazyRoute
  '/finance/expense': typeof FinanceExpenseLazyRoute
  '/finance/income': typeof FinanceIncomeLazyRoute
  '/finance': typeof FinanceIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/finance': typeof FinanceRouteWithChildren
  '/habit-tracker': typeof HabitTrackerRoute
  '/time-tracker': typeof TimeTrackerRoute
  '/finance/categories': typeof FinanceCategoriesLazyRoute
  '/finance/expense': typeof FinanceExpenseLazyRoute
  '/finance/income': typeof FinanceIncomeLazyRoute
  '/finance/': typeof FinanceIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/finance'
    | '/habit-tracker'
    | '/time-tracker'
    | '/finance/categories'
    | '/finance/expense'
    | '/finance/income'
    | '/finance/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/habit-tracker'
    | '/time-tracker'
    | '/finance/categories'
    | '/finance/expense'
    | '/finance/income'
    | '/finance'
  id:
    | '__root__'
    | '/'
    | '/finance'
    | '/habit-tracker'
    | '/time-tracker'
    | '/finance/categories'
    | '/finance/expense'
    | '/finance/income'
    | '/finance/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  FinanceRoute: typeof FinanceRouteWithChildren
  HabitTrackerRoute: typeof HabitTrackerRoute
  TimeTrackerRoute: typeof TimeTrackerRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  FinanceRoute: FinanceRouteWithChildren,
  HabitTrackerRoute: HabitTrackerRoute,
  TimeTrackerRoute: TimeTrackerRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/finance",
        "/habit-tracker",
        "/time-tracker"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/finance": {
      "filePath": "finance.tsx",
      "children": [
        "/finance/categories",
        "/finance/expense",
        "/finance/income",
        "/finance/"
      ]
    },
    "/habit-tracker": {
      "filePath": "habit-tracker.tsx"
    },
    "/time-tracker": {
      "filePath": "time-tracker.tsx"
    },
    "/finance/categories": {
      "filePath": "finance.categories.lazy.tsx",
      "parent": "/finance"
    },
    "/finance/expense": {
      "filePath": "finance.expense.lazy.tsx",
      "parent": "/finance"
    },
    "/finance/income": {
      "filePath": "finance.income.lazy.tsx",
      "parent": "/finance"
    },
    "/finance/": {
      "filePath": "finance.index.lazy.tsx",
      "parent": "/finance"
    }
  }
}
ROUTE_MANIFEST_END */
