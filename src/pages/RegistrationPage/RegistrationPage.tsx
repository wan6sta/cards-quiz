import { Registration } from '../../features/Registration/Registration'
import { Flex } from '../../shared/ui/Flex/Flex'

export const RegistrationPage = () => {
  return (
    <>
      <Flex
        margin={'36px 0 0 0'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Registration />
      </Flex>
    </>
  )
}
