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
  useLazyDeleteMeQuery,
  useMeMutation
} from '../../shared/api/authMeApiSlice'
import { useNavigate } from 'react-router-dom'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { useLoginMutation } from '../Login/api/loginApiSlice'

// Добавить лоадеры

export const Profile: FC = props => {
  const { ...restProps } = props

  const navigate = useNavigate()

  const [deleteAcc, { isLoading: deleteIsLoading }] = useLazyDeleteMeQuery()

  const [
    login,
    {
      error: loginError,
      isSuccess: loginSuccess,
      isLoading: isLoginLoading,
      data: loginData
    }
  ] = useLoginMutation()

  const [me, { isLoading, isSuccess: success, status, data, isError }] =
    useMeMutation()

  useEffect(() => {
    me({})
  }, [])

  const logOutHandler = () => {
    deleteAcc()
    navigate(AppPaths.loginPage)
  }

  console.log(loginData)

  if (isError) {
    navigate(AppPaths.loginPage)
  }

  return (
    <BoxCard rowGap='0px'>
      <Title marginBottom='30px' fontSize='22px'>
        Personal Information
      </Title>
      <ImgWrapper marginBottom='17px' borderRadius={'50%'}>
        <img src={GithubIcon} alt='Icon' />
      </ImgWrapper>
      <EditableSpan
        marginBottom='20px'
        title='Nickname'
        initialValue={'Ivan'}
      />
      <Span marginBottom='29px' light>
        wan6sta@gmail.com
      </Span>
      <Flex width='127px'>
        <Button onClick={logOutHandler} logout secondary>
          Log out
        </Button>
      </Flex>
    </BoxCard>
  )
}
