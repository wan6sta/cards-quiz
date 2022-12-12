import { TextFiled } from '../TextField/TextFiled'
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

export const Storybook = () => {
  return (
    <StyledStorybook>
      <StyledWrapper>
        <Title>TextFiled</Title>
        <TextFiled title={'Email'} textFieldMode={'outlined'} />
        <TextFiled title={'Email'} textFieldMode={'outlined'} showPassword />
        <TextFiled title={'Email'} textFieldMode={'nonOutlined'} />
        <TextFiled title={'Email'} textFieldMode={'nonOutlined'} showPassword />
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
        <AppLink primary to={'/'}>Sign Up</AppLink>
        <AppLink justifyContent={'center'} primary to={'/'}>Sign Up</AppLink>
        <AppLink justifyContent={'flex-end'} primary to={'/'}>Sign Up</AppLink>
        <AppLink primary to={'/'}>Sign Up</AppLink>
        <AppLink secondary to={'/'}>Forgot Password?</AppLink>
      </StyledWrapper>
    </StyledStorybook>
  )
}
