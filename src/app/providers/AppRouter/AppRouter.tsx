import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Storybook } from '../../../shared/ui/Storybook/Storybook'
import { App } from '../../App'
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage'
import { ErrorPage } from '../../../pages/ErrorPage/ErrorPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: 'storybook',
      element: <Storybook />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ],
  {}
)
export const AppRouter = () => {
  return <RouterProvider router={router} />
}
