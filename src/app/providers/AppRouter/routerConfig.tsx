import { ReactNode } from 'react'
import { App } from '../../App'
import { ProfilePage } from '../../../pages/ProfilePage/ProfilePage'
import { RegistrationPage } from '../../../pages/RegistrationPage/RegistrationPage'
import { LoginPage } from '../../../pages/LoginPage/LoginPage'
import { RegistrationSuccessPage } from '../../../pages/RegistrationPage/RegistrationSuccessPage/RegistrationSuccessPage'
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage'
import { Navigate } from 'react-router-dom'
import { Storybook } from '../../../shared/ui/Storybook/Storybook'

export const enum AppPaths {
  'app' = '/',
  'profilePage' = '/profile',
  'registrationPage' = '/registration',
  'loginPage' = '/login',
  'registrationSuccessPage' = '/registrationSuccess',
  'storybook' = '/storybook',
  'notFoundPage' = '/404',
  'notFoundPageRedirect' = '*'
}

interface AppRouteProps {
  path: AppPaths
  element: ReactNode
  pageLayout: boolean
}

export const appRouterConfig: AppRouteProps[] = [
  { path: AppPaths.app, element: <App />, pageLayout: false },

  { path: AppPaths.profilePage, element: <ProfilePage />, pageLayout: true },
  {
    path: AppPaths.registrationPage,
    element: <RegistrationPage />,
    pageLayout: true
  },
  { path: AppPaths.loginPage, element: <LoginPage />, pageLayout: true },
  {
    path: AppPaths.registrationSuccessPage,
    element: <RegistrationSuccessPage />,
    pageLayout: true
  },

  { path: AppPaths.notFoundPage, element: <NotFoundPage />, pageLayout: false },
  {
    path: AppPaths.notFoundPageRedirect,
    element: <Navigate to={AppPaths.notFoundPage} />,
    pageLayout: false
  }
]

if (import.meta.env.DEV) {
  appRouterConfig.push({
    path: AppPaths.storybook,
    element: <Storybook />,
    pageLayout: false
  })
}
