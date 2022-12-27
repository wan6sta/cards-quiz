import { Navigate } from 'react-router-dom'
import { FC, PropsWithChildren } from 'react'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { getIsAuth } from '@/app/api/authSlice'
import { AppPaths } from './routerConfig'

export const RequiredAuth: FC<PropsWithChildren> = props => {
  const { children } = props
  const isAuth = useAppSelector(getIsAuth)

  if (isAuth) return <>{children}</>

  return <Navigate to={AppPaths.loginPage} />
}
