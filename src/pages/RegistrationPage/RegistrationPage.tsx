import { Registration } from '../../features/Registration/Registration'
import { Flex } from '../../shared/ui/Flex/Flex'

export const RegistrationPage = () => {
  return (
    <>
      <Flex flexDirection={'column'} alignItems={'center'}>
        <Registration />
      </Flex>
    </>
  )
}
