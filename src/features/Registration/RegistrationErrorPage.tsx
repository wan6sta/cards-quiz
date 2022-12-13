import styled from 'styled-components'
import { Button } from '../../shared/ui/Button/Button'
import { Title } from '../../shared/ui/Title/Title'
import { useRegisterUserMutation } from './registerApiSlice'

const StyledRegistrationErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9fa;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 200px;
  width: 400px;
`

export const RegistrationErrorPage = () => {
  const [register, { data: registrationData, error: errorMessage }] =
    useRegisterUserMutation()
  const reloadPage = () => {
    location.reload()
  }

  return (
    <StyledRegistrationErrorPage>
      <StyledWrapper>
        <Title>{errorMessage?.error?.message || 'Something went wrong'}</Title>
        <Button width='300px' onClick={reloadPage}>
          Reload the app
        </Button>
      </StyledWrapper>
    </StyledRegistrationErrorPage>
  )
}
