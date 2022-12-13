import { FC } from 'react'
import { StyledButtonWrapper, StyledNavbar } from './StyledNavbar'
import { Button } from '../../shared/ui/Button/Button'

interface NavbarProps {
  someProps?: string
}

export const Navbar: FC<NavbarProps> = props => {
  const { ...restProps } = props

  return (
    <StyledNavbar {...restProps}>
      <StyledButtonWrapper>
        <Button primary>Sign in</Button>
      </StyledButtonWrapper>
    </StyledNavbar>
  )
}
