import React from 'react'
import { useRegisterUserMutation } from './registerApiSlice'
import { useNavigate } from 'react-router-dom'
import { Form } from './RegistrationForm/Form'
import { Title } from '../../shared/ui/Title/Title'
import { Button } from '../../shared/ui/Button/Button'

export const Registration = () => {
  const navigate = useNavigate()
  const [
    registerUser,
    {
      isSuccess,
      isError: registrationError,
      isLoading: registrationLoading,
      error: errorMessage
    }
  ] = useRegisterUserMutation()

  const reloadPage = () => {
    location.reload()
  }

  if (isSuccess) navigate('/registrationSuccess')
  if (registrationLoading) return <div>Loading...</div>
  if (registrationError) {
    return (
      <>
        <Title color={'red'} fontSize={'26px'} marginBottom={'10px'}>
          {errorMessage?.data?.error}
          <Button danger onClick={reloadPage}>
            Click to reload the Page
          </Button>
        </Title>
      </>
    )
  }

  return (
    <>
      <Form registerUser={registerUser} />
    </>
  )
}
