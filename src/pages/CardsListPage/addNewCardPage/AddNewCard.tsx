import { Flex } from '../../../shared/ui/Flex/Flex'
import { Title } from '../../../shared/ui/Title/Title'
import { BackToLink } from '../../../shared/ui/BackToLink/BackToLink'
import { Span } from '../../../shared/ui/Span/Span'
import { Button } from '../../../shared/ui/Button/Button'
import { useCreateCardMutation } from '../../PacksListPage/PackPage/cardApiSlice'
import { useAppSelector } from '../../../app/providers/StoreProvider/hooks/useAppSelector'

export const AddNewCard = () => {
  const [createCard] = useCreateCardMutation()
  const cardPackId = useAppSelector(state => state.cards.cardPackId)
  const onAddCardHandler = async () => {
    const card = {
      cardsPack_id: cardPackId as string
    }
    await createCard({ card })
  }
  return (
    <Flex flexDirection={'column'}>
      <BackToLink alignSelf='flex-start' marginBottom='27px'>
        Back to Packs List
      </BackToLink>
      <Title marginBottom={'86px'}>Name Pack</Title>
      <Span light marginBottom={'32px'} alignSelf={'center'} fontSize={'16px'}>
        This pack is empty. Click add new card to fill this pack
      </Span>
      <div style={{ width: '171px', height: '36px', alignSelf: 'center' }}>
        <Button onClick={onAddCardHandler}>Add new Card</Button>
      </div>
    </Flex>
  )
}
