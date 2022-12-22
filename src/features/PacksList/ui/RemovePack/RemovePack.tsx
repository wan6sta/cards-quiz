import { useDeleteCardPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ReactComponent as DeleteIcon } from '../../../../shared/assets/icons/Trash.svg'
import {FC} from 'react'
import {errorMessageHandler} from "../../../../shared/lib/errorMessageHandler/errorMessageHandler";
import {FetchError} from "../../../../shared/models/ErrorModel";
import {ErrorAlert} from "../../../../shared/ui/ErrorAlert/ErrorAlert";

interface RemovePackProps {
  packId: string
}

// Add error
export const RemovePack: FC<RemovePackProps> = props => {
  const { packId } = props
  const [removePack, { isLoading, error }] = useDeleteCardPackMutation()

  const deleteCardHandler = () => {
    if (isLoading) return
    removePack(packId)
  }

  const errorHandler = errorMessageHandler(
      (error as FetchError)?.data?.error
  )

  return (
    <>
      {isLoading ? <LinearPageLoader /> : null}
      <DeleteIcon onClick={deleteCardHandler} />
      <ErrorAlert errorMessage={errorHandler} />
    </>
  )
}
