import { FC, PropsWithChildren } from 'react'
import { StyledBoxCard } from './StyledBoxCard'

interface BoxCardProps {
  width?: string
}

export const BoxCard: FC<PropsWithChildren<BoxCardProps>> = props => {
  const { children, ...restProps } = props

  return <StyledBoxCard {...restProps}>{children}</StyledBoxCard>
}
