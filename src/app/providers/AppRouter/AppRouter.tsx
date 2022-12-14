import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Storybook } from '../../../shared/ui/Storybook/Storybook'
import { App } from '../../App'
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage'
import { ErrorPage } from '../../../pages/ErrorPage/ErrorPage'
import { PageLayout } from '../../../widgets/PageLayout/PageLayout'
import { ProfilePage } from '../../../pages/ProfilePage/ProfilePage'
import { RegistrationPage } from '../../../pages/RegistrationPage/RegistrationPage'
import { RegistrationSuccessPage } from '../../../pages/RegistrationPage/RegistrationSuccessPage/RegistrationSuccessPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: 'storybook',
      element: <Storybook />,
      errorElement: <ErrorPage />
    },
    {
      path: '/profile',
      element: (
        <PageLayout>
          <ProfilePage />
        </PageLayout>
      ),
      errorElement: <ErrorPage />
    },
    {
      path: '*',
      element: <NotFoundPage />,
      errorElement: <ErrorPage />
    },
    {
      path: '/registration',
      element: (
        <PageLayout>
          <RegistrationPage />
        </PageLayout>
      ),
      errorElement: <ErrorPage />
    },
    {
      path: '/registrationSuccess',
      element: (
        <PageLayout>
          <RegistrationSuccessPage />
        </PageLayout>
      ),
      errorElement: <ErrorPage />
    }
  ],
  {}
)
export const AppRouter = () => {
  return <RouterProvider router={router} />
}
