import { FC, useEffect } from 'react'
import { Title } from '../../shared/ui/Title/Title'
import { ImgWrapper } from '../../shared/ui/ImgWrapper/ImgWrapper'
import GithubIcon from '../../shared/assets/icons/GithubIcon.png'
import { EditableSpan } from '../../widgets/EditableSpan/EditableSpan'
import { Span } from '../../shared/ui/Span/Span'
import { Flex } from '../../shared/ui/Flex/Flex'
import { Button } from '../../shared/ui/Button/Button'
import { BoxCard } from '../../shared/ui/BoxCard/BoxCard'
import {
  useDeleteMeMutation,
  useMeMutation
} from '../../shared/api/authMeApiSlice'
import { useNavigate } from 'react-router-dom'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { LinearPageLoader } from '../../shared/ui/LinearPageLoader/LinearPageLoader'
import { StyledDivForSpan } from './StyledProfile'
import { useEditNameMutation } from './api/profileSlice'

export const Profile: FC = props => {
  const { ...restProps } = props

  const navigate = useNavigate()

  const [
    deleteAcc,
    { isLoading: deleteIsLoading, isSuccess: isDeleteSuccess }
  ] = useDeleteMeMutation()

  const [me, { isLoading: isMeLoading, isSuccess, data: meData, isError }] =
    useMeMutation()

  const [
    editName,
    {
      isLoading: isEditNameLoading,
      data: editNameData,
      isError: editNameIsError
    }
  ] = useEditNameMutation()

  useEffect(() => {
    me({})
  }, [])

  const logOutHandler = () => {
    deleteAcc({})
  }

  useEffect(() => {
    if (isError) {
      navigate(AppPaths.loginPage)
    }
    if (isDeleteSuccess) {
      navigate(AppPaths.loginPage)
    }
  }, [isError, isDeleteSuccess])

  const logOutButtonDisable = deleteIsLoading

  const editNameHandler = (str: string) => {
    const data = {
      name: str,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficatcare.org%2Fadvice%2Fthinking-of-getting-a-cat%2F&psig=AOvVaw0aBcdSvQNNBHGJoD_RPSu1&ust=1671209812335000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOC8qeyL_PsCFQAAAAAdAAAAABAIhttps://www.google.com/url?sa=i&url=https%3A%2F%2Ficatcare.org%2Fadvice%2Fthinking-of-getting-a-cat%2F&psig=AOvVaw0aBcdSvQNNBHGJoD_RPSu1&ust=1671209812335000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOC8qeyL_PsCFQAAAAAdAAAAABAI'
    }

    editName(data)
  }

  console.log(meData)

  return (
    <BoxCard rowGap='0px'>
      {isMeLoading ? <LinearPageLoader /> : null}
      {deleteIsLoading ? <LinearPageLoader /> : null}
      {isEditNameLoading ? <LinearPageLoader /> : null}
      <Title marginBottom='30px' fontSize='22px'>
        Personal Information
      </Title>
      <ImgWrapper marginBottom='17px' borderRadius={'50%'}>
        <img src={GithubIcon} alt='Icon' />
      </ImgWrapper>
      <EditableSpan
        editNameCallback={editNameHandler}
        marginBottom='20px'
        title='Nickname'
        initialValue={meData?.name}
      />
      <StyledDivForSpan>
        <Span light>{meData?.email}</Span>
      </StyledDivForSpan>

      <Flex width='127px'>
        <Button
          disabled={logOutButtonDisable}
          onClick={logOutHandler}
          logout
          secondary
        >
          Log out
        </Button>
      </Flex>
    </BoxCard>
  )
}
