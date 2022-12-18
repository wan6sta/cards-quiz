import { useAppSelector } from '../StoreProvider/hooks/useAppSelector'
import { isAuthSelector } from '../StoreProvider/authSlice/selectors/isAuthSelector'
import { Navigate } from 'react-router-dom'
import { FC, PropsWithChildren } from 'react'
import { AppPaths } from './routerConfig'

export const RequiredAuth: FC<PropsWithChildren> = props => {
  const { children } = props
  const isAuth = useAppSelector(isAuthSelector)

  if (isAuth) return children

  return <Navigate to={AppPaths.loginPage} />
}
