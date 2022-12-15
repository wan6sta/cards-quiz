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

export const Profile: FC = props => {
  const { ...restProps } = props

  const navigate = useNavigate()

  const [
    deleteAcc,
    { isLoading: deleteIsLoading, isSuccess: isDeleteSuccess }
  ] = useDeleteMeMutation()

  const [me, { isLoading: isMeLoading, isSuccess, data, isError }] =
    useMeMutation()

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

  return (
    <BoxCard rowGap='0px'>
      {isMeLoading ? <LinearPageLoader /> : null}
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
      <StyledDivForSpan>
        <Span light>{data?.email}</Span>
      </StyledDivForSpan>

      <Flex width='127px'>
        <Button onClick={logOutHandler} logout secondary>
          Log out
        </Button>
      </Flex>
    </BoxCard>
  )
}
