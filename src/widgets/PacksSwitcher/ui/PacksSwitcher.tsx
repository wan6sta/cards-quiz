import { FC, useCallback, useLayoutEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { debounce, identity, pickBy } from 'lodash-es'
import { AppFilters } from '@/features/PacksList/model/types/FiltersModel'
import { Flex } from '@/shared/ui/Flex/Flex'
import { Span } from '@/shared/ui/Span/Span'
import { StyledPack, StyledPacksSwitcher } from './StyledPacksSwitcher'

export type PackSwitch = 'all' | 'my'

export const PacksSwitcher: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [type, setType] = useState<PackSwitch>('all')

  const filter = searchParams.get(AppFilters.filter)

  useLayoutEffect(() => {
    if (filter) {
      setType(prev => filter as PackSwitch)
    } else {
      setType('all')
    }
  }, [filter])

  const isAll = type === 'all'
  const isMy = type === 'my'

  const debouncedToggle = useCallback(
    debounce((packType: PackSwitch) => {
      setSearchParams(
        pickBy(
          {
            [AppFilters.filter]: packType
          },
          identity
        )
      )
    }, 350),
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
