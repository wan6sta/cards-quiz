import { FC } from 'react'
import cls from './LinearPageLoader.module.css'
import { BarLoader } from 'react-spinners'

interface LineaerPageLoaderProps {}

export const LinearPageLoader: FC<LineaerPageLoaderProps> = props => {
  const { ...restProps } = props

  return (
    <div className={cls.position}>
      <BarLoader height='4px' width='100%' color='#1556ff' />
    </div>
  )
}
