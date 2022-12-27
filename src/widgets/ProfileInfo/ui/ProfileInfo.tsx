import { FC } from 'react'
import GithubIcon from '@/shared/assets/icons/GithubIcon.png'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { authUserData } from '@/app/api/authSlice/selectors/authUserData'
import { Dropdown } from '@/widgets/Dropdown/ui/Dropdown'
import { StyledProfileInfo } from '@/widgets/ProfileInfo/ui/StyledProfileInfo'
import { ImgWrapper } from '@/shared/ui/ImgWrapper/ImgWrapper'

export const ProfileInfo: FC = () => {
  const userData = useAppSelector(authUserData)

  return (
    <Dropdown nav>
      <StyledProfileInfo>
        {userData?.name}
        <ImgWrapper cursorPointer width={'36px'} height={'36px'}>
          <img src={GithubIcon} alt='Icon' />
        </ImgWrapper>
      </StyledProfileInfo>
    </Dropdown>
  )
}
