import { Flex } from '@/shared/ui/Flex/Flex'
import { TextField } from '@/shared/ui/TextField/TextField'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import {
  CheckboxModalLabel,
  TexFieldModalWrapper
} from '@/features/PacksList/ui/AddNewPack/AddPackModal/StyledAddPackModal'

export const AddPackModal = () => {
  return (
    <Flex flexDirection={'column'}>
      <TexFieldModalWrapper>
        <TextField textFieldMode={'nonOutlined'} title={'Name pack'} />
      </TexFieldModalWrapper>
      <CheckboxModalLabel style={{ marginBottom: '35px' }}>
        <Checkbox label={'Private pack'} />
      </CheckboxModalLabel>
    </Flex>
  )
}
