import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Storybook } from '../../../shared/ui/Storybook/Storybook'
import { App } from '../../App'
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFoundPage />
    },
    {
      path: 'storybook',
      element: <Storybook />
    }
  ],
  {}
)
export const AppRouter = () => {
  return <RouterProvider router={router} />
}
