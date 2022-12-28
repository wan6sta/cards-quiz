import { FC } from 'react'
import { Flex } from '@/shared/ui/Flex/Flex'
import { TextField } from '@/shared/ui/TextField/TextField'
import { TexFieldModalWrapper } from '@/features/PacksList/ui/AddNewPack/AddPackModal/StyledAddPackModal'
import { MyListBox } from '@/widgets/ListBox/MyListBox'

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
      <MyListBox />
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
