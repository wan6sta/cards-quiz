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
        <Title>Span</Title>
        <Span light>wow team</Span>
        <Span medium>wow team</Span>
        <Span bold>wow team</Span>
      </StyledWrapper>
    </StyledStorybook>
  )
}
