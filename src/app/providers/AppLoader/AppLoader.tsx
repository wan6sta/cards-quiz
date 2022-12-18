import { useAppDispatch } from '../StoreProvider/hooks/useAppDispatch'
import { useAppSelector } from '../StoreProvider/hooks/useAppSelector'
import { isAuthSelector } from '../StoreProvider/authSlice/selectors/isAuthSelector'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { getAuthMe } from '../StoreProvider/authSlice/getAuthMe'
import { authErrorSelector } from '../StoreProvider/authSlice/selectors/authErrorSelector'
import { LinearPageLoader } from '../../../shared/ui/LinearPageLoader/LinearPageLoader'

export const AppLoader: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(isAuthSelector)
  const error = useAppSelector(authErrorSelector)
  const [isAppLoading, setIsAppLoading] = useState(true)

  useEffect(() => {
    dispatch(getAuthMe())
  }, [])

  useEffect(() => {
    if (isAuth) {
      setIsAppLoading(false)
    }
  }, [isAuth])

  useEffect(() => {
    if (error) {
      setIsAppLoading(false)
    }
  }, [error])

  if (isAppLoading) return <LinearPageLoader />

  return children
}
