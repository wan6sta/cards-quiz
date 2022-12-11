import { TextFiled } from '../TextField/TextFiled'
import { Button } from '../Button/Button'
import { Span } from '../Span/Span'
import { StyledStorybook, StyledWrapper } from './StyledStorybook'

export const Storybook = () => {
  return (
    <StyledStorybook>
      <StyledWrapper>
        <TextFiled title={'Email'} textFieldMode={'outlined'} />
        <TextFiled title={'Email'} textFieldMode={'outlined'} showPassword />
        <TextFiled title={'Email'} textFieldMode={'nonOutlined'} />
        <TextFiled title={'Email'} textFieldMode={'nonOutlined'} showPassword />
      </StyledWrapper>

      <StyledWrapper>
        <Button secondary>wow team</Button>
        <Button danger>wow team</Button>
        <Button primary>wow team</Button>
        <Button nonRounded>wow team</Button>
      </StyledWrapper>

      <StyledWrapper>
        <Span light>wow team</Span>
        <Span medium>wow team</Span>
        <Span bold>wow team</Span>
      </StyledWrapper>
    </StyledStorybook>
  )
}
