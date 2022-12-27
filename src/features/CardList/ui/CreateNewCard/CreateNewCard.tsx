import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useCreateCardMutation } from '../../api/cardApiSlice'
import {
  StyledCreateNewCard,
  StyledCreateNewCardWrapper
} from './StyledCreateNewCard'
import { Span } from '@/shared/ui/Span/Span'
import { Button } from '@/shared/ui/Button/Button'

interface CreateNewCardProps {
  text?: boolean
}

export const CreateNewCard: FC<CreateNewCardProps> = props => {
  const { text } = props

  const [createCard] = useCreateCardMutation()
  const { packId } = useParams()

  const onAddCardHandler = async () => {
    const card = {
      cardsPack_id: String(packId)
    }
    await createCard({ card })
  }

  return (
    <StyledCreateNewCardWrapper>
      {text ? (
        <Span light fontSize={'16px'}>
          This pack is empty. Click add new card to fill this pack
        </Span>
      ) : null}
      <StyledCreateNewCard>
        <Button onClick={onAddCardHandler}>Add new Card</Button>
      </StyledCreateNewCard>
    </StyledCreateNewCardWrapper>
  )
}
