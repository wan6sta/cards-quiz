import { Dialog } from '@headlessui/react'
import React, { FC } from 'react'
import { Flex } from '@/shared/ui/Flex/Flex'
import { Button } from '@/shared/ui/Button/Button'
import { ModalWrapper } from '../ModalWrapper/ModalWrapper'
import { ReactComponent as CrossIcon } from '@/shared/assets/icons/CrossIcon.svg'
import cls from './Modal.module.css'

interface Props {
  isOpen: boolean
  title: string
  buttonMode?: string
  toggleClose: () => void
  actionCallback: () => void
  children?: React.ReactNode
}

export const Modal: FC<Props> = props => {
  const { children, isOpen, toggleClose, title, actionCallback, buttonMode } =
    props

  return (
    <Dialog open={isOpen} onClose={toggleClose}>
      <ModalWrapper>
        <Dialog.Panel className={cls.popup}>
          <Dialog.Title className={cls.popup__title}>
            <div className={cls.title}>{title}</div>
            <button className={cls.crossBtn} onClick={toggleClose}>
              <CrossIcon />
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
            {buttonMode === 'danger' ? (
              <Button danger width={'120px'} onClick={actionCallback}>
                Delete
              </Button>
            ) : (
              <Button width={'120px'} onClick={actionCallback}>
                Save
              </Button>
            )}
          </Flex>
        </Dialog.Panel>
      </ModalWrapper>
    </Dialog>
  )
}
