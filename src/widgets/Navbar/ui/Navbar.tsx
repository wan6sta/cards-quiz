import { Link } from 'react-router-dom'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { isAuthSelector } from '@/app/api/authSlice/selectors/isAuthSelector'
import { ProfileInfo } from '@/widgets/ProfileInfo'
import { Flex } from '@/shared/ui/Flex/Flex'
import { Button } from '@/shared/ui/Button/Button'
import { AppPaths } from '@/app/providers/AppRouter/config/routerConfig'
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
