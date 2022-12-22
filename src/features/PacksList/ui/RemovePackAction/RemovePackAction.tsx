import { useDeleteCardPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ReactComponent as DeleteIcon } from '../../../../shared/assets/icons/Trash.svg'
import { FC } from 'react'
import { useDeleteCardMutation } from '../../../../pages/PacksListPage/PackPage/cardApiSlice'
import {ErrorAlert} from "../../../../shared/ui/ErrorAlert/ErrorAlert";
import {errorMessageHandler} from "../../../../shared/lib/errorMessageHandler/errorMessageHandler";
import {FetchError} from "../../../../shared/models/ErrorModel";

interface RemovePackProps {
  id: string
  cards?: boolean
}

// Add error
export const RemovePackAction: FC<RemovePackProps> = props => {
  const { id, cards } = props
  const [removePack, { isLoading, error: removePackError }] = useDeleteCardPackMutation()
  const [deleteCard, { isLoading: isCardsLoading, error: removeCardError }] = useDeleteCardMutation()
  const deletePackHandler = async () => {
    if (isLoading) return
    await removePack(id)
  }
  const onDeleteCardHandler = async () => {
    if (isCardsLoading) return
    await deleteCard(id)
  }

  const errorPackHandler = errorMessageHandler(
      (removePackError as FetchError)?.data?.error
  )

  const errorCardHandler = errorMessageHandler(
      (removeCardError as FetchError)?.data?.error
  )

  return (
    <>
      {!cards && (
        <>
          {isLoading ? <LinearPageLoader /> : null}
          <DeleteIcon onClick={deletePackHandler} />{' '}
        </>
      )}
      {cards && (
        <>
          {isCardsLoading ? <LinearPageLoader /> : null}
          <DeleteIcon onClick={onDeleteCardHandler} />
        </>
      )}
      <ErrorAlert errorMessage={errorPackHandler} />
      <ErrorAlert errorMessage={errorCardHandler} />
    </>
  )
}
