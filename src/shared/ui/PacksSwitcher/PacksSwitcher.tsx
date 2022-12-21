import { FC, useCallback, useLayoutEffect, useState } from 'react'
import { StyledPack, StyledPacksSwitcher } from './StyledPacksSwitcher'
import { Flex } from '../Flex/Flex'
import { Span } from '../Span/Span'
import { useSearchParams } from 'react-router-dom'
import { useUlrParams } from '../../../features/PacksList/hooks/useUrlParams'
import { AppFilters } from '../../../features/PacksList/models/FiltersModel'
import { debounce, identity, pickBy } from 'lodash-es'

export type PackSwitch = 'all' | 'my'

export const PacksSwitcher: FC = props => {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlParams = useUlrParams()
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

  const debouncedToggle = useCallback(
    debounce((packType: PackSwitch) => {
      setSearchParams(
        pickBy(
          {
            ...urlParams,
            [AppFilters.filter]: packType,
            [AppFilters.page]: ''
          },
          identity
        )
      )
    }, 250),
    [setSearchParams]
  )

  const toggleIsMy = () => {
    setType(prev => 'my')
    debouncedToggle('my')
  }
  const toggleIsAll = () => {
    setType(prev => 'all')
    debouncedToggle('all')
  }

  return (
    <Flex flexDirection='column' rowGap='8px'>
      <Span spanTitle>Show packs cards</Span>
      <StyledPacksSwitcher>
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
