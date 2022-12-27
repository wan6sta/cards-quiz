import { Flex } from '@/shared/ui/Flex/Flex'
import { Registration } from '@/features/Registration/ui/Registration'

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
