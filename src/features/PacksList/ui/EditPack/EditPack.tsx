import { useUpdateCardsPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ReactComponent as EditIcon } from '../../../../shared/assets/icons/EditIcon.svg'
import { FC } from 'react'
import {errorMessageHandler} from "../../../../shared/lib/errorMessageHandler/errorMessageHandler";
import {FetchError} from "../../../../shared/models/ErrorModel";
import {ErrorAlert} from "../../../../shared/ui/ErrorAlert/ErrorAlert";

interface EditPackProps {
  packsId: string
}
// Add error
export const EditPack: FC<EditPackProps> = props => {
  const [updateCard, { isLoading, error }] = useUpdateCardsPackMutation()
  const { packsId } = props

  const editCardHandler = () => {
    if (isLoading) return
    updateCard({ cardsPack: { name: 'edit packName', _id: packsId } })
  }

  const errorHandler = errorMessageHandler(
      (error as FetchError)?.data?.error
  )

  return (
    <>
      {isLoading ? <LinearPageLoader /> : null}
      <EditIcon onClick={editCardHandler} />
      <ErrorAlert errorMessage={errorHandler} />
    </>
  )
}
