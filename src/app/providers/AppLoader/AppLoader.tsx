import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { LinearPageLoader } from '../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { useMeMutation } from '../../../shared/api/authMeApiSlice'

export const AppLoader: FC<PropsWithChildren> = ({ children }) => {
  const [isAppLoading, setIsAppLoading] = useState(true)

  const [me, { error, isSuccess: isAuth }] = useMeMutation()

  useEffect(() => {
    me({})
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

  return <>{children}</>
}
