import { Registration } from '../../features/Registration/Registration'
import { RegistrationWrapper } from '../../features/Registration/registrationWrapper'

export const RegistrationPage = () => {
  // Flex refactor
  return (
    <>
      <RegistrationWrapper flexDirection={'column'}>
        <Registration />
      </RegistrationWrapper>
    </>
  )
}
