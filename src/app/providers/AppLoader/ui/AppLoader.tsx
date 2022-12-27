import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { useMeMutation } from '@/app/api/authSlice'
import { LinearPageLoader } from '@/widgets/LinearPageLoader'

export const AppLoader: FC<PropsWithChildren> = props => {
  const { children } = props
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
