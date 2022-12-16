import { FC } from 'react'
import {
    StyledListItem,
    StyledProfileItem,
    StyledProfileModalInfo,
    StyledSearchItem, StyledTextWrapper
} from './StyledProfileModalInfo'
import { ReactComponent as MiniUser } from '../../../shared/assets/icons/MiniUser.svg'
import { ReactComponent as Logout } from '../../../shared/assets/icons/Logout.svg'

interface ProfileModalInfoProps {}

export const ProfileModalInfo: FC<ProfileModalInfoProps> = props => {
  const { ...restProps } = props

  return (
    <StyledProfileModalInfo>
      <StyledProfileItem>
        <MiniUser />
        <StyledTextWrapper>
            Profile
        </StyledTextWrapper>
      </StyledProfileItem>
      <StyledProfileItem>
        <Logout />
      </StyledProfileItem>
    </StyledProfileModalInfo>
  )
}
