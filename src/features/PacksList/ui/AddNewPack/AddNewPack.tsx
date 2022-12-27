import { Button } from '../../../../shared/ui/Button/Button'
import { ButtonWrapper } from './StyledAddNewPack'
import { useCreateCardPackMutation } from '../../api/packsApiSlice'
import { LinearPageLoader } from '../../../../shared/ui/LinearPageLoader/LinearPageLoader'
import { ErrorAlert } from '../../../../shared/ui/ErrorAlert/ErrorAlert'
import { errorMessageHandler } from '../../../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../../../shared/models/ErrorModel'
import { useState } from 'react'
import { AddPackModal } from './AddPackModal/AddPackModal'
import { Modal } from '../../../../widgets/Modal/Modal'

export const AddNewPack = () => {
  const [newName, setNewName] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [addCard, { isLoading, error }] = useCreateCardPackMutation()

  const addCardHandler = () => {
    addCard({ cardsPack: { name: newName, private: isPrivate } })
    setIsOpen(false)
  }

  const toggleOpen = () => {
    setIsOpen(true)
  }
  const toggleClose = () => {
    setIsOpen(false)
  }
  const disableBtn = isLoading

  const errorHandler = errorMessageHandler((error as FetchError)?.data?.error)

  return (
    <div>
      {isLoading ? <LinearPageLoader /> : null}
      <ButtonWrapper>
        <Button onClick={toggleOpen} disabled={disableBtn}>
          Add new pack
        </Button>
        <Modal
          isOpen={isOpen}
          actionCallback={addCardHandler}
          title={'Add new pack'}
          toggleClose={toggleClose}
        >
          <AddPackModal
            newName={newName}
            setNewName={setNewName}
            isPrivate={isPrivate}
            setIsPrivate={setIsPrivate}
          />
        </Modal>
        <ErrorAlert errorMessage={errorHandler} />
      </ButtonWrapper>
    </div>
  )
}
