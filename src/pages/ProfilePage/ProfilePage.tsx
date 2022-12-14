import { StyledProfilePage } from './StyledProfilePage'
import { BackToLink } from '../../shared/ui/BackToLink/BackToLink'
import { Profile } from '../../features/Profile/Profile'

export const ProfilePage = () => {
  return (
    <StyledProfilePage>
      <BackToLink alignSelf='flex-start' marginBottom='12px'>
        Back to Packs List
      </BackToLink>
      <Profile />
    </StyledProfilePage>
  )
}
