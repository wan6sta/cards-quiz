import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from '../../../pages/ErrorPage/ErrorPage'
import { PageLayout } from '../../../widgets/PageLayout/PageLayout'
import { appRouterConfig } from './routerConfig'

const newRouter = createBrowserRouter(
  appRouterConfig.map(route => ({
    path: route.path,
    element: route.pageLayout ? (
      <PageLayout>{route.element}</PageLayout>
    ) : (
      route.element
    ),
    errorElement: <ErrorPage />
  }))
)

export const AppRouter = () => {
  return <RouterProvider router={newRouter} />
}
