import { TextField } from '../TextField/TextField'
import { Button } from '../Button/Button'
import { Span } from '../Span/Span'
import {
  StyledCheckboxWrapper,
  StyledStorybook,
  StyledWrapper
} from './StyledStorybook'
import { BoxCard } from '../BoxCard/BoxCard'
import { Checkbox } from '../Checkbox/Checkbox'
import { Title } from '../Title/Title'
import { AppLink } from '../AppLink/AppLink'
import { BackToLink } from '../BackToLink/BackToLink'
import { ImgWrapper } from '../ImgWrapper/ImgWrapper'
import Git from '../../assets/icons/Cat.jpg'
import Cat from '../../assets/icons/GithubIcon.png'
import { EditableSpan } from '../../../widgets/EditableSpan/EditableSpan'
import { LinearPageLoader } from '../LinearPageLoader/LinearPageLoader'
import { Pagination } from '../../../widgets/Pagination/ui/Pagination/Pagination'
import { Dropdown } from '../../../widgets/Dropdown/Dropdown'
import { DoubleRange } from '../../../widgets/DoubleRange/DoubleRange'
import { PacksSwitcher } from '../../../widgets/PacksSwitcher/PacksSwitcher'
import { TableSkeleton } from '../TableSkeleton/TableSkeleton'

export const Storybook = () => {
  return (
    <StyledStorybook>
      <LinearPageLoader />
      <StyledWrapper>
        <Title>TextFiled</Title>
        <TextField title={'Email'} textFieldMode={'outlined'} />
        <TextField title={'Email'} textFieldMode={'outlined'} showPassword />
        <TextField title={'Email'} textFieldMode={'nonOutlined'} />
        <TextField title={'Email'} textFieldMode={'nonOutlined'} showPassword />
        <TextField
          title={'Email'}
          textFieldMode={'nonOutlined'}
          withSaveButton
        />
      </StyledWrapper>

      <BoxCard width='350px'>
        <Title>Button ^..^</Title>
        <Button secondary>wow team</Button>
        <Button danger>wow team</Button>
        <Button primary>wow team</Button>
        <Button nonRounded>wow team</Button>

        <StyledCheckboxWrapper>
          <Checkbox />
          <Checkbox />
          <Checkbox />
        </StyledCheckboxWrapper>
      </BoxCard>

      <StyledWrapper>
        <Title>Span & AppLink</Title>
        <Span light>wow team</Span>
        <Span medium>wow team</Span>
        <Span bold>wow team</Span>
        <AppLink primary to={'/'}>
          Sign Up
        </AppLink>
        <AppLink justifyContent={'center'} primary to={'/'}>
          Sign Up
        </AppLink>
        <AppLink justifyContent={'flex-end'} primary to={'/'}>
          Sign Up
        </AppLink>
        <AppLink primary to={'/'}>
          Sign Up
        </AppLink>
        <AppLink secondary to={'/'}>
          Forgot Password?
        </AppLink>
      </StyledWrapper>

      <StyledWrapper>
        <Title>...</Title>
        <BackToLink>Back to Packs List</BackToLink>
        <BackToLink>Back to Packs List</BackToLink>
        <ImgWrapper>
          <img src={Cat} />
        </ImgWrapper>
        <ImgWrapper borderRadius='50%'>
          <img src={Git} />
        </ImgWrapper>
        <EditableSpan initialValue={'SomeName'} title={'someTitle'} />
        <Button logout secondary>
          Log out
        </Button>
      </StyledWrapper>

      <StyledWrapper>
        <Checkbox label='some label' />
      </StyledWrapper>
      <Dropdown nav>Кнопка</Dropdown>
      <Dropdown />
      <Pagination />

      <StyledWrapper>
        <DoubleRange />
      </StyledWrapper>

      <StyledWrapper>
        <PacksSwitcher />
      </StyledWrapper>

      <StyledWrapper>
        <TableSkeleton />
      </StyledWrapper>
    </StyledStorybook>
  )
}
