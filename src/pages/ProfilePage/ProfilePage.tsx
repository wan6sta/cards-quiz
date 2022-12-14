import { StyledProfilePage } from './StyledProfilePage'
import { BoxCard } from '../../shared/ui/BoxCard/BoxCard'
import { Title } from '../../shared/ui/Title/Title'
import { BackToLink } from '../../shared/ui/BackToLink/BackToLink'
import { ImgWrapper } from '../../shared/ui/ImgWrapper/ImgWrapper'
import GithubIcon from '../../shared/assets/icons/GithubIcon.png'
import { EditableSpan } from '../../widgets/EditableSpan/EditableSpan'
import { Span } from '../../shared/ui/Span/Span'
import { Button } from '../../shared/ui/Button/Button'
import { Flex } from '../../shared/ui/Flex/Flex'

// вынести в фичу
export const ProfilePage = () => {
  return (
    <StyledProfilePage>
      <BackToLink alignSelf='flex-start' marginBottom='12px'>
        Back to Packs List
      </BackToLink>
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
          <Button logout secondary>
            Log out
          </Button>
        </Flex>
      </BoxCard>
    </StyledProfilePage>
  )
}
