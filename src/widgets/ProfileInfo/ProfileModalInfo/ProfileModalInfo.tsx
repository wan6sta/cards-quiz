import { FC } from 'react'
import {
  StyledProfileItem,
  StyledProfileModalInfo,
  StyledTextWrapper
} from './StyledProfileModalInfo'
import { ReactComponent as MiniUser } from '../../../shared/assets/icons/MiniUser.svg'
import { ReactComponent as Logout } from '../../../shared/assets/icons/Logout.svg'

export const ProfileModalInfo: FC = props => {
  return (
    <StyledProfileModalInfo>
      <StyledProfileItem>
        <MiniUser />
        <StyledTextWrapper>Profile</StyledTextWrapper>
      </StyledProfileItem>
      <StyledProfileItem>
        <Logout />
      </StyledProfileItem>
    </StyledProfileModalInfo>
  )
}
