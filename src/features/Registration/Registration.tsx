import { useRegisterUserMutation } from './api/registerApiSlice'
import { useNavigate } from 'react-router-dom'
import { RegistrationForm } from './RegistrationForm/RegistrationForm'
import { Title } from '../../shared/ui/Title/Title'

import { errorMessageHandler } from '../../shared/lib/errorMessageHandler/errorMessageHandler'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { FetchError } from '../../shared/models/ErrorModel'
import { RegistrationLoader } from '../../pages/RegistrationPage/RegistrationLoader'

export const Registration = () => {
  const navigate = useNavigate()

  const [
    registerUser,
    {
      isSuccess,
      isError: registrationError,
      isLoading: registrationLoading,
      error
    }
  ] = useRegisterUserMutation()

  let errorMessage

  if (registrationError) {
    errorMessage = (error as FetchError).data.error
  }

  const properErrorMessage = errorMessageHandler(errorMessage)

  if (isSuccess) navigate(AppPaths.registrationSuccessPage)

  if (registrationLoading) return <RegistrationLoader />

  // Добавить всплывашку
  return (
    <>
      <RegistrationForm registerUser={registerUser} />
      <Title color={'red'} fontSize={'26px'} marginBottom={'10px'}>
        {registrationError && properErrorMessage}
      </Title>
    </>
  )
}
