import { FC } from 'react'
import { CircleLoader } from '../../shared/ui/CircleLoader/CircleLoader'
import { StyledPageLoader } from './StyledPageLoader'

interface PageLoaderProps {}

export const PageLoader: FC<PageLoaderProps> = props => {
  const { ...restProps } = props

  return (
    <StyledPageLoader {...restProps}>
      <CircleLoader />
    </StyledPageLoader>
  )
}
