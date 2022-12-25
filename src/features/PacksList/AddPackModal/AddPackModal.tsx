import { Flex } from '../../../shared/ui/Flex/Flex'
import { TextField } from '../../../shared/ui/TextField/TextField'
import { Checkbox } from '../../../shared/ui/Checkbox/Checkbox'

export const AddPackModal = () => {
  return (
    <Flex flexDirection={'column'}>
      <TextField
        width={'100%'}
        textFieldMode={'nonOutlined'}
        title={'Name pack'}
        margin={'0 0 30px 0'}
      />
      <label style={{ marginBottom: '35px' }}>
        <Checkbox label={'Private pack'} />
      </label>
    </Flex>
  )
}
