import { FC } from 'react'
import { BoxCard } from '../../../../shared/ui/BoxCard/BoxCard'
import { Title } from '../../../../shared/ui/Title/Title'
import { StyledForgotPasswordPage } from './StyledForgotPasswordPage'
import { ForgotPassword } from '../../../../features/PasswordUpdate/ForgotPassword'

export const ForgotPasswordPage: FC = props => {
  const { ...restProps } = props

  return (
    <StyledForgotPasswordPage {...restProps}>
      <BoxCard>
        <Title marginBottom='20px'>Forgot your password?</Title>
        <ForgotPassword />
      </BoxCard>
    </StyledForgotPasswordPage>
  )
}
