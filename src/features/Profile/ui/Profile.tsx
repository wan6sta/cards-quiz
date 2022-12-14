import GithubIcon from '@/shared/assets/icons/GithubIcon.png'
import { StyledDivForSpan } from './StyledProfile'
import { useEditNameMutation } from '../api/profileSlice'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { authUserData, useDeleteMeMutation } from '@/app/api/authSlice'
import { errorMessageHandler } from '@/shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '@/shared/types/ErrorModel'
import { LinearPageLoader } from '@/widgets/LinearPageLoader'
import { BoxCard } from '@/shared/ui/BoxCard/BoxCard'
import { Title } from '@/shared/ui/Title/Title'
import { ImgWrapper } from '@/shared/ui/ImgWrapper/ImgWrapper'
import { EditableSpan } from '@/widgets/EditableSpan'
import { Span } from '@/shared/ui/Span/Span'
import { Flex } from '@/shared/ui/Flex/Flex'
import { Button } from '@/shared/ui/Button/Button'
import { ErrorAlert } from '@/shared/ui/ErrorAlert/ErrorAlert'

export const Profile = () => {
  const userData = useAppSelector(authUserData)

  const [editName, { isLoading: isEditNameLoading, error: editNameError }] =
    useEditNameMutation()

  const [deleteAcc, { isLoading: deleteIsLoading, error: deleteMeError }] =
    useDeleteMeMutation()

  const logOutHandler = async () => {
    await deleteAcc({})
  }

  const editNameHandler = async (str: string) => {
    if (userData?.name === str) return

    const data = {
      name: str,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficatcare.org%2Fadvice%2Fthinking-of-getting-a-cat%2F&psig=AOvVaw0aBcdSvQNNBHGJoD_RPSu1&ust=1671209812335000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOC8qeyL_PsCFQAAAAAdAAAAABAIhttps://www.google.com/url?sa=i&url=https%3A%2F%2Ficatcare.org%2Fadvice%2Fthinking-of-getting-a-cat%2F&psig=AOvVaw0aBcdSvQNNBHGJoD_RPSu1&ust=1671209812335000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOC8qeyL_PsCFQAAAAAdAAAAABAI'
    }
    await editName(data)
  }

  const properMeErrorMessage = errorMessageHandler(
    (editNameError as FetchError)?.data?.error
  )

  const properDeleteErrorMessage = errorMessageHandler(
    (deleteMeError as FetchError)?.data?.error
  )

  const isBundleLoading = deleteIsLoading || isEditNameLoading
  const logOutButtonDisable = deleteIsLoading

  return (
    <BoxCard rowGap='0px'>
      {isBundleLoading ? <LinearPageLoader /> : null}
      <Title marginBottom='30px' fontSize='22px'>
        Personal Information
      </Title>
      <ImgWrapper marginBottom='25px' borderRadius={'50%'}>
        <img src={GithubIcon} alt='Icon' />
      </ImgWrapper>
      <StyledDivForSpan>
        {userData ? (
          <EditableSpan
            editNameCallback={editNameHandler}
            marginBottom='20px'
            title='Nickname'
            initialValue={userData?.name}
          />
        ) : null}
      </StyledDivForSpan>

      <StyledDivForSpan>
        <Span light>{userData?.email}</Span>
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
      <ErrorAlert errorMessage={properMeErrorMessage} />
      <ErrorAlert errorMessage={properDeleteErrorMessage} />
    </BoxCard>
  )
}
