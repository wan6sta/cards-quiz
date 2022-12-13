import { FC, PropsWithChildren } from 'react'
import { StyledBoxCard } from './StyledBoxCard'

interface BoxCardProps {
  width?: string
  rowGap?: string
}

export const BoxCard: FC<PropsWithChildren<BoxCardProps>> = props => {
  const { children, ...restProps } = props

  return <StyledBoxCard {...restProps}>{children}</StyledBoxCard>
}
