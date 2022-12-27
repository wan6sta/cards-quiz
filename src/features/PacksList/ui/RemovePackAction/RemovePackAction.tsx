import { useDeleteCardPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ReactComponent as DeleteIcon } from '../../../../shared/assets/icons/Trash.svg'
import { FC, useState } from 'react'
import { useDeleteCardMutation } from '../../../CardList/api/cardApiSlice'
import { ErrorAlert } from '../../../../shared/ui/ErrorAlert/ErrorAlert'
import { errorMessageHandler } from '../../../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../../../shared/models/ErrorModel'
import { Modal } from '../../../../widgets/Modal/Modal'
import { RemovePackModal } from './RemovePackModal/RemovePackModal'

interface RemovePackProps {
  id: string
  cards?: boolean
  packsName?: string
}

// Add error
export const RemovePackAction: FC<RemovePackProps> = props => {
  const [isOpen, setIsOpen] = useState(false)
  const { id, cards, packsName } = props
  const [removePack, { isLoading, error: removePackError }] =
    useDeleteCardPackMutation()
  const [deleteCard, { isLoading: isCardsLoading, error: removeCardError }] =
    useDeleteCardMutation()
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

  const toggleClose = () => {
    setIsOpen(false)
  }
  const toggleOpen = () => {
    setIsOpen(true)
  }

  return (
    <>
      {!cards && (
        <>
          {isLoading ? <LinearPageLoader /> : null}
          <DeleteIcon onClick={toggleOpen} />{' '}
        </>
      )}
      {cards && (
        <>
          {isCardsLoading ? <LinearPageLoader /> : null}
          <DeleteIcon onClick={onDeleteCardHandler} />
        </>
      )}
      <Modal
        buttonMode={'danger'}
        title={'Delete pack'}
        toggleClose={toggleClose}
        isOpen={isOpen}
        actionCallback={deletePackHandler}
      >
        <RemovePackModal packsName={packsName}/>
      </Modal>
      <ErrorAlert errorMessage={errorPackHandler} />
      <ErrorAlert errorMessage={errorCardHandler} />
    </>
  )
}
