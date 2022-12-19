import { FC, useState } from 'react'
import { StyledPack, StyledPacksSwitcher } from './StyledPacksSwitcher'
import {Flex} from "../Flex/Flex";
import {Span} from "../Span/Span";

interface PacksSwitcherProps {}

export type PackSwitch = 'all' | 'my'

export const PacksSwitcher: FC<PacksSwitcherProps> = props => {
  const { ...restProps } = props

  const [type, setType] = useState<PackSwitch>('all')

  const isAll = type === 'all'
  const isMy = type === 'my'

  const toggleIsMy = () => setType(prev => 'my')
  const toggleIsAll = () => setType(prev => 'all')

  return (
    <Flex flexDirection='column' rowGap='8px'>
        <Span title>Show packs cards</Span>
        <StyledPacksSwitcher {...restProps}>
            <StyledPack tabIndex={1} onClick={toggleIsMy} isMy={isMy}>
                My
            </StyledPack>
            <StyledPack tabIndex={1} onClick={toggleIsAll} isAll={isAll}>
                All
            </StyledPack>
        </StyledPacksSwitcher>
    </Flex>
  )
}
