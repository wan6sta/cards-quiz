import { FC, useState } from 'react'
import { ReactComponent as DeleteIcon } from '@/shared/assets/icons/Trash.svg'
import { RemovePackModal } from './RemovePackModal/RemovePackModal'
import { useDeleteCardPackMutation } from '@/features/PacksList'
import { useDeleteCardMutation } from '@/features/CardList'
import { errorMessageHandler } from '@/shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '@/shared/types/ErrorModel'
import { LinearPageLoader } from '@/widgets/LinearPageLoader'
import { Modal } from '@/widgets/Modal/ui'
import { ErrorAlert } from '@/shared/ui/ErrorAlert/ErrorAlert'

interface RemovePackProps {
  id: string
  cards?: boolean
  packsName?: string
  cardName?: string
}

export const RemovePackAction: FC<RemovePackProps> = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const { id, cards, packsName, cardName } = props
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
  const toggleClose1 = () => {
    setIsOpen1(false)
  }
  const toggleOpen1 = () => {
    setIsOpen1(true)
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
          <DeleteIcon onClick={toggleOpen1} />
        </>
      )}
      <Modal
        buttonMode={'danger'}
        title={'Delete pack'}
        toggleClose={toggleClose}
        isOpen={isOpen}
        actionCallback={deletePackHandler}
      >
        <RemovePackModal packsName={packsName} />
      </Modal>
      <Modal
        buttonMode={'danger'}
        title={'Delete pack'}
        toggleClose={toggleClose1}
        isOpen={isOpen1}
        actionCallback={onDeleteCardHandler}
      >
        <RemovePackModal cardName={cardName} />
      </Modal>
      <ErrorAlert errorMessage={errorPackHandler} />
      <ErrorAlert errorMessage={errorCardHandler} />
    </>
  )
}
