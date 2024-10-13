/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const FinanceLazyImport = createFileRoute('/finance')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const FinanceLazyRoute = FinanceLazyImport.update({
  path: '/finance',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/finance.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

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
      preLoaderRoute: typeof FinanceLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/finance': typeof FinanceLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/finance': typeof FinanceLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/finance': typeof FinanceLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/finance'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/finance'
  id: '__root__' | '/' | '/finance'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  FinanceLazyRoute: typeof FinanceLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  FinanceLazyRoute: FinanceLazyRoute,
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
        "/finance"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/finance": {
      "filePath": "finance.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */