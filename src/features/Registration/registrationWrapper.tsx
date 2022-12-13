import { FC, PropsWithChildren } from 'react'
import { StyledRegistrationWrapper } from './StyledRegistrationWrapper'

interface NewRegistrationProps {
  flexDirection?: string
}

export const RegistrationWrapper: FC<PropsWithChildren<NewRegistrationProps>> = props => {
  const { children, ...restProps } = props

  return (
    <StyledRegistrationWrapper {...restProps}>
      {children}
    </StyledRegistrationWrapper>
  )
}
