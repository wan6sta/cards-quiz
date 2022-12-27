import { StyledForgotPasswordPage } from './StyledForgotPasswordPage'
import { BoxCard } from '@/shared/ui/BoxCard/BoxCard'
import { Title } from '@/shared/ui/Title/Title'
import { ForgotPassword } from '@/features/PasswordUpdate/ui/ForgotPassword/ForgotPassword'

export const ForgotPasswordPage = () => {
  return (
    <StyledForgotPasswordPage>
      <BoxCard>
        <Title marginBottom='20px'>Forgot your password?</Title>
        <ForgotPassword />
      </BoxCard>
    </StyledForgotPasswordPage>
  )
}
