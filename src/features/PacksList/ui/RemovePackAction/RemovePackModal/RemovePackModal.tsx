import { FC } from 'react'
import { Flex } from '@/shared/ui/Flex/Flex'
import { Span } from '@/shared/ui/Span/Span'

interface RemovePackModalProps {
  packName?: string
}

export const RemovePackModal: FC<RemovePackModalProps> = props => {
  const { packName } = props
  return (
    <Flex flexDirection={'column'} margin={'0 0 30px 0'}>
      <Span>
        Do you really want to remove {packName}? All cards will be deleted.
      </Span>
    </Flex>
  )
}
