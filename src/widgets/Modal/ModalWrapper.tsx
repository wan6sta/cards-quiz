import { FC, PropsWithChildren } from 'react'
import { StyledModalWrapper } from './StyledModalWrapper'

interface BoxCardProps {}

export const ModalWrapper: FC<PropsWithChildren<BoxCardProps>> = props => {
  const { children, ...restProps } = props

  return <StyledModalWrapper {...restProps}>{children}</StyledModalWrapper>
}