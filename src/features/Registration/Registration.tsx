import React from 'react'
import { useRegisterUserMutation } from './registerApiSlice'
import { useNavigate } from 'react-router-dom'
import { Form } from './RegistrationForm/Form'

export const Registration = () => {
  const navigate = useNavigate()
  const [
    registerUser,
    {
      isSuccess,
      isError: registrationError,
      isLoading: registrationLoading,
      data: registerUserResponse,
      error: errorMessage
    }
  ] = useRegisterUserMutation()
  console.log(errorMessage)

  if (isSuccess) navigate('*')
  if (registrationLoading) return <div>Loading...</div>
  return (
    <>
      <Form registerUser={registerUser} />
      {registrationError && <p>{registerUserResponse.error}</p>}
    </>
  )
}
