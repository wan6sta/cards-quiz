import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { appRouterConfig } from '../config/routerConfig'
import { RequiredAuth } from '../config/RequiredAuth'
import { RequiredNonAuth } from '../config/RequiredNonAuth'
import { PageLayout } from '@/widgets/PageLayout'
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage'

const newRouter = createBrowserRouter(
  appRouterConfig.map(route => {
    const element = route.pageLayout ? (
      <PageLayout>{route.element}</PageLayout>
    ) : (
      route.element
    )

    let protectedElement = element

    if (!route.page404) {
      protectedElement = route.requiredAuth ? (
        <RequiredAuth>{element}</RequiredAuth>
      ) : (
        <RequiredNonAuth>{element}</RequiredNonAuth>
      )
    }

    return {
      path: route.path,
      element: protectedElement,
      errorElement: <ErrorPage />
    }
  })
)

export const AppRouter = () => {
  return <RouterProvider router={newRouter} />
}
