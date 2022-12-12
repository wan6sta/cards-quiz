import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Storybook } from '../../../shared/ui/Storybook/Storybook'
import { App } from '../../App'
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage'
import { ErrorPage } from '../../../pages/ErrorPage/ErrorPage'
import { RegistrationPage } from '../../../pages/RegistrationPage/RegistrationPage'

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
    },
    {
      path: '/registration',
      element: <RegistrationPage />,
      errorElement: <ErrorPage />
    }
  ],
  {}
)
export const AppRouter = () => {
  return <RouterProvider router={router} />
}
