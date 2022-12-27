import { FC } from 'react'
import { Flex } from '@/shared/ui/Flex/Flex'
import { TextField } from '@/shared/ui/TextField/TextField'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { TexFieldModalWrapper } from '@/features/PacksList/ui/AddNewPack/AddPackModal/StyledAddPackModal'
import { PerPageSelect } from '@/widgets/PerPageSelect'

interface CreateNewCardModalProps {
  question: string
  setQuestion: (question: string) => void
  answer: string
  setAnswer: (answer: string) => void
}

export const CreateNewCardModal: FC<CreateNewCardModalProps> = props => {
  const { question, setQuestion, answer, setAnswer } = props
  return (
    <Flex flexDirection={'column'}>
      <label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <TexFieldModalWrapper>
        <TextField
          value={question}
          onChange={e => setQuestion(e.currentTarget.value)}
          textFieldMode={'nonOutlined'}
          title={'Question'}
        />
      </TexFieldModalWrapper>
      <TexFieldModalWrapper>
        <TextField
          value={answer}
          onChange={e => setAnswer(e.currentTarget.value)}
          textFieldMode={'nonOutlined'}
          title={'Answer'}
        />
      </TexFieldModalWrapper>
    </Flex>
  )
}
