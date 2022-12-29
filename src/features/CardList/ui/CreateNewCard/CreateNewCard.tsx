import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCreateCardMutation } from '../../api/cardApiSlice'
import {
  StyledCreateNewCard,
  StyledCreateNewCardWrapper
} from './StyledCreateNewCard'
import { Span } from '@/shared/ui/Span/Span'
import { Button } from '@/shared/ui/Button/Button'
import { Modal } from '@/widgets/Modal/ui'
import { CreateNewCardModal } from '@/features/CardList/ui/CreateNewCard/CreateNewCardModal/CreateNewCardBody'

interface CreateNewCardProps {
  text?: boolean
}

export const CreateNewCard: FC<CreateNewCardProps> = props => {
  const { text } = props

  const [isOpen, setIsOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [createCard] = useCreateCardMutation()
  const { packId } = useParams()

  const onAddCardHandler = async () => {
    const card = {
      cardsPack_id: String(packId),
      question,
      answer
    }
    await createCard({ card })
    toggleClose()
  }

  const toggleClose = () => {
    setIsOpen(false)
  }
  const toggleOpen = () => {
    setIsOpen(true)
  }
  return (
    <StyledCreateNewCardWrapper>
      {text ? (
        <Span light fontSize={'16px'}>
          This pack is empty. Click add new card to fill this pack
        </Span>
      ) : null}
      <StyledCreateNewCard>
        <Button onClick={toggleOpen}>Add new Card</Button>
      </StyledCreateNewCard>
      <Modal
        isOpen={isOpen}
        title={'Add new card'}
        toggleClose={toggleClose}
        actionCallback={onAddCardHandler}
      >
        <CreateNewCardModal
          question={question}
          setQuestion={setQuestion}
          answer={answer}
          setAnswer={setAnswer}
        />
      </Modal>
    </StyledCreateNewCardWrapper>
  )
}
