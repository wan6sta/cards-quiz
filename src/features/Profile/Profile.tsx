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
  useDeleteMeMutation
} from '../../shared/api/authMeApiSlice'
import { useNavigate } from 'react-router-dom'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { LinearPageLoader } from '../../shared/ui/LinearPageLoader/LinearPageLoader'
import { StyledDivForSpan } from './StyledProfile'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { useAppDispatch } from '../../app/providers/StoreProvider/hooks/useAppDispatch'
import {
  removeUserData,
  setUserData
} from '../../app/providers/StoreProvider/authSlice/authSlice'
import { useEditNameMutation } from './api/profileSlice'
import { ErrorAlert } from '../../shared/ui/ErrorAlert/ErrorAlert'
import { errorMessageHandler } from '../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../shared/models/ErrorModel'
import { authUserDataSelector } from '../../app/providers/StoreProvider/authSlice/selectors/authUserDataSelector'
import { getAuthMe } from '../../app/providers/StoreProvider/authSlice/getAuthMe'
import {authErrorSelector} from "../../app/providers/StoreProvider/authSlice/selectors/authErrorSelector";
import {authIsLoadingSelector} from "../../app/providers/StoreProvider/authSlice/selectors/authIsLoadingSelector";

export const Profile: FC = props => {
  const dispatch = useAppDispatch()

  const userData = useAppSelector(authUserDataSelector)
  const authIsLoading = useAppSelector(authIsLoadingSelector)

  const [
    editName,
    {
      isLoading: isEditNameLoading,
      data: editNameData,
      isSuccess: isEditNameSuccess,
      error: editNameError
    }
  ] = useEditNameMutation()

  const [
    deleteAcc,
    {
      isLoading: deleteIsLoading,
      isSuccess: isDeleteSuccess,
      error: deleteMeError
    }
  ] = useDeleteMeMutation()

  useEffect(() => {
    if (!userData) dispatch(getAuthMe())
  }, [userData])

  useEffect(() => {
    if (editNameData) dispatch(setUserData(editNameData.updatedUser))
  }, [isEditNameSuccess])

  useEffect(() => {
    if (isDeleteSuccess) {
      dispatch(removeUserData())
    }
  }, [isDeleteSuccess])

  const logOutHandler = async () => {
    await deleteAcc({})
  }

  const logOutButtonDisable = deleteIsLoading

  const editNameHandler = async (str: string) => {
    if (userData?.name === str) return

    const data = {
      name: str,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficatcare.org%2Fadvice%2Fthinking-of-getting-a-cat%2F&psig=AOvVaw0aBcdSvQNNBHGJoD_RPSu1&ust=1671209812335000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOC8qeyL_PsCFQAAAAAdAAAAABAIhttps://www.google.com/url?sa=i&url=https%3A%2F%2Ficatcare.org%2Fadvice%2Fthinking-of-getting-a-cat%2F&psig=AOvVaw0aBcdSvQNNBHGJoD_RPSu1&ust=1671209812335000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOC8qeyL_PsCFQAAAAAdAAAAABAI'
    }
    await editName(data)
  }

  const properMeErrorMessage = errorMessageHandler(
    (deleteMeError as FetchError)?.data?.error
  )

  const properDeleteErrorMessage = errorMessageHandler(
    (editNameError as FetchError)?.data?.error
  )

  const isBundleLoading = authIsLoading || deleteIsLoading || isEditNameLoading

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
