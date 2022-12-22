import { useUpdateCardsPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ReactComponent as EditIcon } from '../../../../shared/assets/icons/EditIcon.svg'
import { FC } from 'react'
import { useUpdateCardMutation } from '../../../../pages/PacksListPage/PackPage/cardApiSlice'

interface EditPackProps {
  Id: string
  cards?: boolean
}

// Add error
export const EditActionIcon: FC<EditPackProps> = props => {
  const { Id, cards } = props
  const [updatePack, { isLoading }] = useUpdateCardsPackMutation()
  const [updateCard, { isLoading: isCardsLoading }] = useUpdateCardMutation()

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
    </>
  )
}
