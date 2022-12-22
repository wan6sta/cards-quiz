import { Flex } from '../../../shared/ui/Flex/Flex'
import { Title } from '../../../shared/ui/Title/Title'
import { BackToLink } from '../../../shared/ui/BackToLink/BackToLink'
import { Span } from '../../../shared/ui/Span/Span'
import { Button } from '../../../shared/ui/Button/Button'

export const AddNewCard = () => {
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
        <Button>Add new Card</Button>
      </div>
    </Flex>
  )
}
