import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from '../../../pages/ErrorPage/ErrorPage'
import { PageLayout } from '../../../widgets/PageLayout/ui/PageLayout'
import { appRouterConfig } from './routerConfig'
import { RequiredAuth } from './RequiredAuth'
import { RequiredNonAuth } from './RequiredNonAuth'

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
