import { FC } from 'react'
import styled, { css } from 'styled-components'
import {Title} from "../../shared/ui/Title/Title";

interface StyledPacksListPageProps {}

export const StyledPacksListPage = styled.div<StyledPacksListPageProps>`
  ${props => props && css``}
`
interface PacksListPageProps {}

export const PacksListPage: FC<PacksListPageProps> = props => {
  const { ...restProps } = props

  return <StyledPacksListPage {...restProps} >
      <Title>Packs List</Title>
  </StyledPacksListPage>
}
