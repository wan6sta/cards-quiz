import { useUpdateCardsPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ReactComponent as EditIcon } from '../../../../shared/assets/icons/EditIcon.svg'
import { FC, useState } from 'react'
import { useUpdateCardMutation } from '../../../CardList/api/cardApiSlice'
import { errorMessageHandler } from '../../../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../../../shared/models/ErrorModel'
import { ErrorAlert } from '../../../../shared/ui/ErrorAlert/ErrorAlert'
import { Modal } from '../../../../widgets/Modal/Modal'
import { AddPackModal } from '../AddNewPack/AddPackModal/AddPackModal'

interface EditPackProps {
  Id: string
  cards?: boolean
  dropdown?: boolean
}

// Add error
export const EditActionIcon: FC<EditPackProps> = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [newName, setNewName] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)

  const { Id, cards, dropdown } = props
  const [updatePack, { isLoading, error: updatePackError }] =
    useUpdateCardsPackMutation()
  const [updateCard, { isLoading: isCardsLoading, error: updateCardError }] =
    useUpdateCardMutation()

  const editPackHandler = async () => {
    if (isLoading) return
    await updatePack({ cardsPack: { name: newName, _id: Id, private: isPrivate } })
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

  const toggleOpen = () => {
    setIsOpen(true)
  }
  const toggleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      {!cards && (
        <>
          {isLoading ? <LinearPageLoader /> : null}
          <EditIcon onClick={toggleOpen} />
        </>
      )}
      {cards && (
        <>
          {isCardsLoading ? <LinearPageLoader /> : null}
          <EditIcon onClick={toggleOpen} />
        </>
      )}
      <Modal
        isOpen={isOpen}
        title={'Edit pack'}
        toggleClose={toggleClose}
        actionCallback={editPackHandler}
      >
        <AddPackModal
          setIsPrivate={setIsPrivate}
          isPrivate={isPrivate}
          newName={newName}
          setNewName={setNewName}
        />
      </Modal>
      <ErrorAlert errorMessage={errorPackHandler} />
      <ErrorAlert errorMessage={errorCardHandler} />
    </>
  )
}
