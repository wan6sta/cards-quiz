import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  element?: HTMLElement | null
}

export const Portal: FC<PortalProps> = props => {
  const { element = document.body, children } = props

  return createPortal(children, element as HTMLElement)
}
