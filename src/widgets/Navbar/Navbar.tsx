import { FC } from 'react'
import { StyledButtonWrapper, StyledNavbar } from './StyledNavbar'
import { Button } from '../../shared/ui/Button/Button'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { Link } from 'react-router-dom'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { Flex } from '../../shared/ui/Flex/Flex'
import { ProfileInfo } from '../ProfileInfo/ProfileInfo'
import {authSelector} from "../../app/providers/StoreProvider/authSlice/selectors/authSelector";

interface NavbarProps {
  someProps?: string
}

export const Navbar: FC<NavbarProps> = props => {
  const { ...restProps } = props

  const { userData } = useAppSelector(authSelector)

  return (
    <StyledNavbar {...restProps}>
      <StyledButtonWrapper>
        {!userData ? (
          <Link to={AppPaths.loginPage}>
            <Flex width='113px'>
              <Button>Sign in</Button>
            </Flex>
          </Link>
        ) : (
          <ProfileInfo />
        )}
      </StyledButtonWrapper>
    </StyledNavbar>
  )
}
