import { FC } from 'react'
import { StyledButtonWrapper, StyledNavbar } from './StyledNavbar'
import { Button } from '../../shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'

interface NavbarProps {
  someProps?: string
}

export const Navbar: FC<NavbarProps> = props => {
  const { ...restProps } = props
  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate(AppPaths.loginPage)
  }
  return (
    <StyledNavbar {...restProps}>
      <StyledButtonWrapper>
        <Button onClick={onClickHandler} primary>
          Sign in
        </Button>
      </StyledButtonWrapper>
    </StyledNavbar>
  )
}
