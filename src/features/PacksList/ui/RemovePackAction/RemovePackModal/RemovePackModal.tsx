import { FC } from 'react'
import { Flex } from '@/shared/ui/Flex/Flex'
import { StyledName, StyledSpan } from './StyledRemovePackModal'

interface RemovePackModalProps {
  packsName?: string
  cardName?: string
}

export const RemovePackModal: FC<RemovePackModalProps> = props => {
  const { packsName, cardName } = props
  return (
    <Flex flexDirection={'column'} margin={'0 0 30px 0'}>
      {packsName && (
        <StyledSpan>
          Do you really want to remove <StyledName>{packsName}</StyledName>? All
          cards will be deleted.
        </StyledSpan>
      )}
      {cardName && (
        <StyledSpan>
          Do you really want to remove <StyledName>{cardName}</StyledName>?
        </StyledSpan>
      )}
    </Flex>
  )
}
