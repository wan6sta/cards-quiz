import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

export const StoreProvider: FC<PropsWithChildren> = props => {
  const { children } = props

  return <Provider store={store}>{children}</Provider>
}
