import { FC } from 'react'
import styled, { css } from 'styled-components'
import { TextField } from '../../shared/ui/TextField/TextField'
import { Title } from '../../shared/ui/Title/Title'
import { useCreateCardPackMutation, useGetPacksQuery } from './packsApiSlice'
import { ArgsForGetCards } from './packModel'
import { Button } from '../../shared/ui/Button/Button'

export const StyledPacksListPage = styled.div`
  ${props => props && css``}
`

export const PacksListPage: FC = props => {
  const { data: packsList } = useGetPacksQuery({
    page: 2,
    min: 10,
    max: 20
  } as ArgsForGetCards)

  const [createPack, { data: createPackData }] = useCreateCardPackMutation()
  const onCreatePackHandler = async () => {
    await createPack({name:'CardPack'})
  }
  console.log(packsList)
  const { ...restProps } = props
  return (
    <StyledPacksListPage {...restProps}>
      <Title>Packs List</Title>
      <TextField title={'Search a pack'} textFieldMode={'outlined'} />
      {packsList?.map(pack => {
        return <div key={pack._id}>{pack.name}</div>
      })}
      <Button onClick={onCreatePackHandler}>Create Pack</Button>
    </StyledPacksListPage>
  )
}
