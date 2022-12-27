import { ButtonWrapper } from './StyledAddNewPack'
import { useState } from 'react'
import { AddPackModal } from './AddPackModal/AddPackModal'
import { useCreateCardPackMutation } from '@/features/PacksList'
import { errorMessageHandler } from '@/shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '@/shared/types/ErrorModel'
import { LinearPageLoader } from '@/widgets/LinearPageLoader'
import { Button } from '@/shared/ui/Button/Button'
import { Modal } from '@/widgets/Modal/ui'
import { ErrorAlert } from '@/shared/ui/ErrorAlert/ErrorAlert'

export const AddNewPack = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [addCard, { isLoading, error }] = useCreateCardPackMutation()

  const addCardHandler = () => {
    addCard({ cardsPack: { name: 'mock card' } })
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
          <AddPackModal />
        </Modal>
        <ErrorAlert errorMessage={errorHandler} />
      </ButtonWrapper>
    </div>
  )
}
