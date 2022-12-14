import React from 'react'
import { useRegisterUserMutation } from './registerApiSlice'
import { useNavigate } from 'react-router-dom'
import { Form } from './RegistrationForm/Form'
import { Title } from '../../shared/ui/Title/Title'
import { FetchError } from './registrationModels'

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
  const errorMessageArr = errorMessage?.split(' ')
  const properErrorMessage = errorMessageArr
    ?.slice(0, errorMessageArr.length - 1)
    .join(' ')
  if (isSuccess) navigate('/registrationSuccess')
  if (registrationLoading) return <div>Loading...</div>
  return (
    <>
      <Form registerUser={registerUser} />
      <Title color={'red'} fontSize={'26px'} marginBottom={'10px'}>
        {registrationError && properErrorMessage}
      </Title>
    </>
  )
}
