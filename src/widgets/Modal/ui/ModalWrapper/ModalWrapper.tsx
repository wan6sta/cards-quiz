import { FC, PropsWithChildren } from 'react'
import { StyledModalWrapper } from './StyledModalWrapper'

export const ModalWrapper: FC<PropsWithChildren> = props => {
  const { children, ...restProps } = props

  return <StyledModalWrapper {...restProps}>{children}</StyledModalWrapper>
}
