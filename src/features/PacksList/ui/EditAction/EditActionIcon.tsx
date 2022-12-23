import { useUpdateCardsPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ReactComponent as EditIcon } from '../../../../shared/assets/icons/EditIcon.svg'
import { FC } from 'react'
import { useUpdateCardMutation } from '../../../CardList/api/cardApiSlice'
import { errorMessageHandler } from '../../../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../../../shared/models/ErrorModel'
import { ErrorAlert } from '../../../../shared/ui/ErrorAlert/ErrorAlert'

interface EditPackProps {
  Id: string
  cards?: boolean
  dropdown?: boolean
}

// Add error
export const EditActionIcon: FC<EditPackProps> = props => {
  const { Id, cards, dropdown } = props
  const [updatePack, { isLoading, error: updatePackError }] =
    useUpdateCardsPackMutation()
  const [updateCard, { isLoading: isCardsLoading, error: updateCardError }] =
    useUpdateCardMutation()

  const editPackHandler = async () => {
    if (isLoading) return
    await updatePack({ cardsPack: { name: 'edit packName', _id: Id } })
  }

  const onUpdateCardHandler = async () => {
    if (isCardsLoading) return
    await updateCard({
      card: {
        _id: Id,
        question: 'How you doing?'
      }
    })
  }

  const errorPackHandler = errorMessageHandler(
    (updatePackError as FetchError)?.data?.error
  )

  const errorCardHandler = errorMessageHandler(
    (updateCardError as FetchError)?.data?.error
  )

  return (
    <>
      {!cards && (
        <>
          {isLoading ? <LinearPageLoader /> : null}
          <EditIcon onClick={editPackHandler} />
        </>
      )}
      {cards && (
        <>
          {isCardsLoading ? <LinearPageLoader /> : null}
          <EditIcon onClick={onUpdateCardHandler} />
        </>
      )}
      <ErrorAlert errorMessage={errorPackHandler} />
      <ErrorAlert errorMessage={errorCardHandler} />
    </>
  )
}
