import { Dialog } from '@headlessui/react'
import React, { FC } from 'react'
import { Portal } from '../../shared/ui/Portal/Portal'
import { Button } from '../../shared/ui/Button/Button'
import { ModalWrapper } from './ModalWrapper'
import styles from './Modal.module.css'
import { Title } from '../../shared/ui/Title/Title'
import { Flex } from '../../shared/ui/Flex/Flex'

interface MyModalProps {
  isOpen: boolean
  title: string
  toggleClose: () => void
  actionCallback: () => void
  children: React.ReactNode
}

export const Modal: FC<MyModalProps> = props => {
  const { children, isOpen, toggleClose, title, actionCallback } = props

  return (
    <>
      <Portal element={document.getElementById('root')}>
        <Dialog open={isOpen} onClose={toggleClose}>
          <ModalWrapper>
            <Dialog.Panel className={styles.popup}>
              <Dialog.Title className={styles.popup__title}>
                <Title fontSize={'18px'}>{title}</Title>
                <button onClick={toggleClose}>
                  <span className={styles.cross}></span>
                </button>
              </Dialog.Title>
              <Flex padding={'0 24px'}>{children}</Flex>
              <Flex
                justifyContent={'space-between'}
                padding={'0 24px'}
                margin={'0 0 47px 0'}
              >
                <Button width={'120px'} secondary onClick={toggleClose}>
                  Cancel
                </Button>
                <Button width={'120px'} onClick={actionCallback}>Save</Button>
              </Flex>
            </Dialog.Panel>
          </ModalWrapper>
        </Dialog>
      </Portal>
    </>
  )
}
