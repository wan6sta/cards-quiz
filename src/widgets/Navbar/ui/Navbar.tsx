import { Link } from 'react-router-dom'
import { useAppSelector } from '@/app/providers/StoreProvider/hooks/useAppSelector'
import { isAuthSelector } from '@/app/providers/StoreProvider/authSlice/selectors/isAuthSelector'
import { ProfileInfo } from '@/widgets/ProfileInfo'
import { Flex } from '@/shared/ui/Flex/Flex'
import { Button } from '@/shared/ui/Button/Button'
import { AppPaths } from '@/app/providers/AppRouter/routerConfig'
import { StyledButtonWrapper, StyledNavbar } from './StyledNavbar'

export const Navbar = () => {
  const isAuth = useAppSelector(isAuthSelector)

  return (
    <StyledNavbar>
      <StyledButtonWrapper>
        {isAuth ? (
          <ProfileInfo />
        ) : (
          <Link to={AppPaths.loginPage}>
            <Flex width='113px'>
              <Button>Sign in</Button>
            </Flex>
          </Link>
        )}
      </StyledButtonWrapper>
    </StyledNavbar>
  )
}
