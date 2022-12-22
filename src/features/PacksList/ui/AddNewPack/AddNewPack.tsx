import { Button } from '../../../../shared/ui/Button/Button'
import { ButtonWrapper } from './StyledAddNewPack'
import { useCreateCardPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ErrorAlert } from '../../../../shared/ui/ErrorAlert/ErrorAlert'
import { errorMessageHandler } from '../../../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../../../shared/models/ErrorModel'

export const AddNewPack = () => {
  const [addCard, { isLoading, error }] = useCreateCardPackMutation()

  const addCardHandler = () => {
    addCard({ cardsPack: { name: 'mock card' } })
  }

  const disableBtn = isLoading

  const errorHandler = errorMessageHandler((error as FetchError)?.data?.error)

  return (
    <div>
      {isLoading ? <LinearPageLoader /> : null}
      <ButtonWrapper>
        <Button onClick={addCardHandler} disabled={disableBtn}>
          Add new pack
        </Button>
        <ErrorAlert errorMessage={errorHandler} />
      </ButtonWrapper>
    </div>
  )
}
