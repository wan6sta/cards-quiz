import { FC } from 'react'
import { BoxCard } from '@/shared/ui/BoxCard/BoxCard'
import { Title } from '@/shared/ui/Title/Title'
import { CreateNewPassword } from '@/features/PasswordUpdate/CreateNewPassword'
import { StyledSetNewPasswordPage } from './StyledSetNewPasswordPage'

export const SetNewPasswordPage: FC = props => {
  const { ...restProps } = props

  return (
    <StyledSetNewPasswordPage {...restProps}>
      <BoxCard>
        <Title marginBottom='30px'>Create new password</Title>
        <CreateNewPassword />
      </BoxCard>
    </StyledSetNewPasswordPage>
  )
}
