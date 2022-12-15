import { ReactNode } from 'react'
import { ProfilePage } from '../../../pages/ProfilePage/ProfilePage'
import { RegistrationPage } from '../../../pages/RegistrationPage/RegistrationPage'
import { LoginPage } from '../../../pages/LoginPage/LoginPage'
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage'
import { Storybook } from '../../../shared/ui/Storybook/Storybook'
import { RegistrationSuccessPage } from '../../../pages/RegistrationPage/RegistrationSuccessPage/RegistrationSuccessPage'
import { ForgotPasswordPage } from '../../../pages/ResetPasword/ForgotPasswordPage/ForgotPasswordPage'
import { SetNewPasswordPage } from '../../../pages/ResetPasword/SetNewPasswordPage/SetNewPasswordPage'
import { CheckEmailPage } from '../../../pages/ResetPasword/CheckEmailPage/CheckEmailPage'

export const enum AppPaths {
  'app' = '/',
  'profilePage' = '/profile',
  'registrationPage' = '/registration',
  'loginPage' = '/login',
  'registrationSuccessPage' = '/registrationSuccess',
  'storybook' = '/storybook',
  'forgotPasswordPage' = '/forgotPasswordPage',
  'setNewPassword' = '/setNewPassword/:token',
  'checkEmailPage' = '/checkEmailPage/:email',
  'notFoundPage' = '/404',
  'notFoundPageRedirect' = '*'
}

interface AppRouteProps {
  path: AppPaths
  element: ReactNode
  pageLayout: boolean
}

export const appRouterConfig: AppRouteProps[] = [
  { path: AppPaths.app, element: <LoginPage />, pageLayout: true },

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
  {
    path: AppPaths.forgotPasswordPage,
    element: <ForgotPasswordPage />,
    pageLayout: true
  },
  {
    path: AppPaths.checkEmailPage,
    element: <CheckEmailPage />,
    pageLayout: true
  },
  {
    path: AppPaths.setNewPassword,
    element: <SetNewPasswordPage />,
    pageLayout: true
  },

  { path: AppPaths.notFoundPage, element: <NotFoundPage />, pageLayout: false },
  {
    path: AppPaths.notFoundPageRedirect,
    element: <NotFoundPage />,
    // element: <Navigate to={AppPaths.notFoundPage} />,
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
