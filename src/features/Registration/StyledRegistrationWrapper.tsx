import styled, { css } from 'styled-components'

interface StyledRegistrationProps {
  flexDirection?: string
}

// Уьрать

export const StyledRegistrationWrapper = styled.div<StyledRegistrationProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'row'};
  width: 100vw;
  ${props => props && css``}
`
