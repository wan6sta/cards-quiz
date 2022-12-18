import { FC } from 'react'
import { StyledButtonWrapper, StyledNavbar } from './StyledNavbar'
import { Button } from '../../shared/ui/Button/Button'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { Link } from 'react-router-dom'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { Flex } from '../../shared/ui/Flex/Flex'
import { ProfileInfo } from '../ProfileInfo/ProfileInfo'
import { authUserDataSelector } from '../../app/providers/StoreProvider/authSlice/selectors/authUserDataSelector'
import { authIsLoadingSelector } from '../../app/providers/StoreProvider/authSlice/selectors/authIsLoadingSelector'
import { isAuthSelector } from '../../app/providers/StoreProvider/authSlice/selectors/isAuthSelector'

interface NavbarProps {
  someProps?: string
}

export const Navbar: FC<NavbarProps> = props => {
  const { ...restProps } = props

  const userData = useAppSelector(authUserDataSelector)
  const isLoading = useAppSelector(authIsLoadingSelector)
  const isAuth = useAppSelector(isAuthSelector)

  return (
    <StyledNavbar {...restProps}>
      <StyledButtonWrapper>
        {isLoading ? (
          <div></div>
        ) : (
          <div>
            {isAuth ? (
              <ProfileInfo />
            ) : (
              <Link to={AppPaths.loginPage}>
                <Flex width='113px'>
                  <Button>Sign in</Button>
                </Flex>
              </Link>
            )}
          </div>
        )}
      </StyledButtonWrapper>
    </StyledNavbar>
  )
}
