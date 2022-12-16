import { FC } from 'react'
import styled, { css } from 'styled-components'
import { Title } from '../../shared/ui/Title/Title'

export const StyledPacksListPage = styled.div`
  ${props => props && css``}
`

export const PacksListPage: FC = props => {
  const { ...restProps } = props

  return (
    <StyledPacksListPage {...restProps}>
      <Title>Packs List</Title>
    </StyledPacksListPage>
  )
}
