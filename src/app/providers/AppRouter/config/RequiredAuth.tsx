import { Navigate } from 'react-router-dom'
import { FC, PropsWithChildren } from 'react'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { isAuthSelector } from '@/app/api/authSlice'
import { AppPaths } from './routerConfig'

export const RequiredAuth: FC<PropsWithChildren> = props => {
  const { children } = props
  const isAuth = useAppSelector(isAuthSelector)

  if (isAuth) return <>{children}</>

  return <Navigate to={AppPaths.loginPage} />
}
