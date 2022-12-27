import { FC } from 'react'
import { Flex } from '@/shared/ui/Flex/Flex'
import { TextField } from '@/shared/ui/TextField/TextField'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { CheckboxModalLabel, TexFieldModalWrapper } from './StyledAddPackModal'

interface AddModalProps {
  newName: string
  setNewName: (newName: string) => void
  isPrivate: boolean
  setIsPrivate: (isPrivate: boolean) => void
}

export const AddPackModal: FC<AddModalProps> = props => {
  const { newName, setNewName, isPrivate, setIsPrivate } = props
  return (
    <Flex flexDirection={'column'}>
      <TexFieldModalWrapper>
        <TextField
          value={newName}
          onChange={e => setNewName(e.currentTarget.value)}
          textFieldMode={'nonOutlined'}
          title={'Name pack'}
        />
      </TexFieldModalWrapper>
      <CheckboxModalLabel style={{ marginBottom: '35px' }}>
        <Checkbox
          width={'16px'}
          height={'16px'}
          checked={isPrivate}
          onChange={e => setIsPrivate(e.currentTarget.checked)}
          label={'Private pack'}
        />
      </CheckboxModalLabel>
    </Flex>
  )
}
