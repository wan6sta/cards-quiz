import { FC } from 'react'
import { Flex } from '@/shared/ui/Flex/Flex'
import { StyledName, StyledSpan } from './StyledRemovePackModal'

interface RemovePackModalProps {
  packsName?: string
}

export const RemovePackModal: FC<RemovePackModalProps> = props => {
  const { packsName } = props
  return (
    <Flex flexDirection={'column'} margin={'0 0 30px 0'}>
      <StyledSpan>
        Do you really want to remove <StyledName>{packsName}</StyledName>? All
        cards will be deleted.
      </StyledSpan>
    </Flex>
  )
}
