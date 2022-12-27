import { FC } from 'react'
import { Flex } from '@/shared/ui/Flex/Flex'
import { TextField } from '@/shared/ui/TextField/TextField'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'

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
      <TextField
        value={newName}
        onChange={e => setNewName(e.currentTarget.value)}
        width={'100%'}
        textFieldMode={'nonOutlined'}
        title={'Name pack'}
        margin={'0 0 30px 0'}
      />
      <label style={{ marginBottom: '35px' }}>
        <Checkbox
          label={'Private pack'}
          checked={isPrivate}
          onChange={e => setIsPrivate(e.currentTarget.checked)}
        />
      </label>
    </Flex>
  )
}
