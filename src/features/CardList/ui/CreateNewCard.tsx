import { FC } from 'react'
import { Button } from '../../../shared/ui/Button/Button'
import { useCreateCardMutation } from '../api/cardApiSlice'
import { useAppSelector } from '../../../app/providers/StoreProvider/hooks/useAppSelector'
import {
  StyledCreateNewCard,
  StyledCreateNewCardWrapper
} from './StyledCreateNewCard'
import { Span } from '../../../shared/ui/Span/Span'

export const CreateNewCard: FC = props => {
  const [createCard] = useCreateCardMutation()
  const cardPackId = useAppSelector(state => state.cards.cardPackId)

  const onAddCardHandler = async () => {
    const card = {
      cardsPack_id: cardPackId
    }
    await createCard({ card })
  }

  return (
    <StyledCreateNewCardWrapper>
      <Span light fontSize={'16px'}>
        This pack is empty. Click add new card to fill this pack
      </Span>
      <StyledCreateNewCard>
        <Button onClick={onAddCardHandler}>Add new Card</Button>
      </StyledCreateNewCard>
    </StyledCreateNewCardWrapper>
  )
}
