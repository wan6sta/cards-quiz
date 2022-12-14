import { StyledTitle } from './StyledTitle'
import { FC, PropsWithChildren } from 'react'

interface TitleProps {
  fontSize?: string
  marginBottom?: string
  color?: string
}

export const Title: FC<PropsWithChildren<TitleProps>> = props => {
  const { children, ...restProps } = props

  return <StyledTitle {...restProps}>{children}</StyledTitle>
}
