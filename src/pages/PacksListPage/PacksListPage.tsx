import { FC } from 'react'
import styled, { css } from 'styled-components'
import { TextField } from '../../shared/ui/TextField/TextField'
import { Title } from '../../shared/ui/Title/Title'
import { useGetPacksQuery } from './packsApiSlice'

export const StyledPacksListPage = styled.div`
  ${props => props && css``}
`

export const PacksListPage: FC = props => {
  const {
    error,
    isError,
    isSuccess,
    isLoading,
    data: packsList
  } = useGetPacksQuery('')

  console.log(packsList)
  const { ...restProps } = props
  return (
    <StyledPacksListPage {...restProps}>
      <Title>Packs List</Title>
      <TextField title={'Search a pack'} textFieldMode={'outlined'} />
      {packsList?.map(pack => {
        return <div key={pack._id}>{pack.name}</div>
      })}
    </StyledPacksListPage>
  )
}
