import { StyledTitle } from './StyledTitle'
import { FC, PropsWithChildren } from 'react'

export const Title: FC<PropsWithChildren> = props => {
  const { children } = props

  return <StyledTitle>{children}</StyledTitle>
}
