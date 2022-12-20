import { FC, useEffect, useLayoutEffect, useState } from 'react'
import { StyledPack, StyledPacksSwitcher } from './StyledPacksSwitcher'
import { Flex } from '../Flex/Flex'
import { Span } from '../Span/Span'
import { useAppSelector } from '../../../app/providers/StoreProvider/hooks/useAppSelector'
import { useSearchParams } from 'react-router-dom'
import { useUlrParams } from '../../../features/PacksList/hooks/useUrlParams'
import { AppFilters } from '../../../features/PacksList/models/FiltersModel'

interface PacksSwitcherProps {}

export type PackSwitch = 'all' | 'my'

export const PacksSwitcher: FC<PacksSwitcherProps> = props => {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlParams = useUlrParams()
  const { ...restProps } = props
  const [type, setType] = useState<PackSwitch>('all')

  const filter = searchParams.get(AppFilters.filter)

  useLayoutEffect(() => {
    if (filter === null) {
      setType('all')
      return
    }
    setType(prev => filter as PackSwitch)
  }, [filter])
  const isAll = type === 'all'
  const isMy = type === 'my'

  const toggleIsMy = () => {
    setType(prev => 'my')
    setSearchParams({ ...urlParams, [AppFilters.filter]: 'my' })
  }
  const toggleIsAll = () => {
    setType(prev => 'all')
    setSearchParams({ ...urlParams, [AppFilters.filter]: 'all' })
  }

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
