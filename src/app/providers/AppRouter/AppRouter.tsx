import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Storybook } from '../../../shared/ui/Storybook/Storybook'
import { App } from '../../App'
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage'
import { ErrorPage } from '../../../pages/ErrorPage/ErrorPage'
import { PageLayout } from '../../../widgets/PageLayout/PageLayout'
import { ProfilePage } from '../../../pages/ProfilePage/ProfilePage'

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
    }
  ],
  {}
)
export const AppRouter = () => {
  return <RouterProvider router={router} />
}
