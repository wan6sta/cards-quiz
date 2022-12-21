import { Button } from '../../../../shared/ui/Button/Button'
import { ButtonWrapper } from './StyledAddNewPack'
import { useCreateCardPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'

export const AddNewPack = () => {
  const [addCard, { isLoading }] = useCreateCardPackMutation()

  const addCardHandler = () => {
    addCard({ cardsPack: { name: 'mock card' } })
  }

  const disableBtn = isLoading

  return (
    <>
      {isLoading ? <LinearPageLoader /> : null}
      <ButtonWrapper>
        <Button onClick={addCardHandler} disabled={disableBtn}>
          Add new pack
        </Button>
      </ButtonWrapper>
    </>
  )
}
