import { useDeleteCardPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ReactComponent as DeleteIcon } from '../../../../shared/assets/icons/Trash.svg'
import { FC } from 'react'
import { useDeleteCardMutation } from '../../../../pages/PacksListPage/PackPage/cardApiSlice'

interface RemovePackProps {
  id: string
  cards?: boolean
}

// Add error
export const RemovePackAction: FC<RemovePackProps> = props => {
  const { id, cards } = props
  const [removePack, { isLoading }] = useDeleteCardPackMutation()
  const [deleteCard, { isLoading: isCardsLoading }] = useDeleteCardMutation()
  const deletePackHandler = async () => {
    if (isLoading) return
    await removePack(id)
  }
  const onDeleteCardHandler = async () => {
    if (isCardsLoading) return
    await deleteCard(id)
  }

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
    </>
  )
}
