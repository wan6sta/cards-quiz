import { BackToLink } from '@/shared/ui/BackToLink/BackToLink'
import { Learn } from '@/features/Learn'

export const LearnPage = () => {
  return (
    <>
      <BackToLink cardList alignSelf='flex-start' marginBottom='12px'>
        Back to Cards List
      </BackToLink>
      <Learn />
    </>
  )
}
