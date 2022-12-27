import { ReactNode } from 'react'
import { LoginPage } from '@/pages/LoginPage/LoginPage'
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage'
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage'
import { RegistrationSuccessPage } from '@/pages/RegistrationPage/RegistrationSuccessPage/RegistrationSuccessPage'
import { PacksListPage } from '@/pages/PacksListPage/PacksListPage'
import { CardsListPage } from '@/pages/CardsListPage/CardsListPage'
import { ForgotPasswordPage } from '@/pages/ProfilePage/ResetPassword/ForgotPasswordPage/ForgotPasswordPage'
import { CheckEmailPage } from '@/pages/ProfilePage/ResetPassword/CheckEmailPage/CheckEmailPage'
import { SetNewPasswordPage } from '@/pages/ProfilePage/ResetPassword/SetNewPasswordPage/SetNewPasswordPage'
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage'
import { Navigate } from 'react-router-dom'
import { Storybook } from '@/shared/ui/Storybook/Storybook'

export const enum AppPaths {
  'app' = '/',
  'profilePage' = '/profile',
  'registrationPage' = '/registration',
  'loginPage' = '/login',
  'registrationSuccessPage' = '/registration-success',
  'storybook' = '/storybook',
  'packsListPage' = '/packs-list',
  'cardsListPage' = '/cards-list/:packId',
  'forgotPasswordPage' = '/forgot-password-page',
  'setNewPassword' = '/set-new-password/:token',
  'checkEmailPage' = '/check-email-page',
  'notFoundPage' = '/404',
  'notFoundPageRedirect' = '*'
}

interface AppRouteProps {
  path: AppPaths
  element: ReactNode
  pageLayout: boolean
  requiredAuth?: boolean
  page404?: boolean
}

export const appRouterConfig: AppRouteProps[] = [
  { path: AppPaths.app, element: <LoginPage />, pageLayout: true },
  {
    path: AppPaths.profilePage,
    element: <ProfilePage />,
    pageLayout: true,
    requiredAuth: true
  },
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
    path: AppPaths.packsListPage,
    element: <PacksListPage />,
    pageLayout: true,
    requiredAuth: true
  },
  {
    path: AppPaths.cardsListPage,
    element: <CardsListPage />,
    pageLayout: true,
    requiredAuth: true
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
  {
    path: AppPaths.notFoundPage,
    element: <NotFoundPage />,
    pageLayout: false,
    page404: true
  },
  {
    path: AppPaths.notFoundPageRedirect,
    // element: <NotFoundPage />,
    element: <Navigate to={AppPaths.notFoundPage} />,
    pageLayout: false,
    page404: true
  }
]

if (import.meta.env.DEV) {
  appRouterConfig.push({
    path: AppPaths.storybook,
    element: <Storybook />,
    pageLayout: false,
    requiredAuth: true
  })
}
