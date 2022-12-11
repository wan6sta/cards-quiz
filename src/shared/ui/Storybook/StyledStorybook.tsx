import styled, { css } from 'styled-components'

export const StyledStorybook = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  ${props => props && css``}
`

export const StyledWrapper = styled.div`
  width: 347px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  ${props => props && css``}
`
