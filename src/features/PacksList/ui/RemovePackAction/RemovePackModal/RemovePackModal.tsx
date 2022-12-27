import { Flex } from '../../../../../shared/ui/Flex/Flex'
import { Span } from '../../../../../shared/ui/Span/Span'
import { FC } from 'react'

interface RemovePackModalProps {
  packsName?: string
}

export const RemovePackModal: FC<RemovePackModalProps> = props => {
  const { packsName } = props
  return (
    <Flex flexDirection={'column'} margin={'0 0 30px 0'}>
      <Span>
        Do you really want to remove {packsName}? All cards will be deleted.
      </Span>
    </Flex>
  )
}
