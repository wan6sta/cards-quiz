import React from 'react'
import { Registration } from '../../features/Registration/Registration'
import { RegistrationWrapper } from '../../features/Registration/registrationWrapper'

export const RegistrationPage = () => {
  return (
    <>
      <RegistrationWrapper flexDirection={'column'}>
        <Registration />
      </RegistrationWrapper>
    </>
  )
}
