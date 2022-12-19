import styled, { css } from 'styled-components'

interface StyledTrProps {
  body?: boolean
}

export const StyledPacksList = styled.div`
  width: 100%;
  ${props => props && css``}
`

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  box-shadow: 2px 1px 8px 0px rgba(34, 60, 80, 0.2);
`

export const StyledThead = styled.thead`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 16px 36px;
  background: #EFEFEF;
`

export const StyledTbody = styled.tbody`
  
`

export const StyledTr = styled.tr<StyledTrProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 48px;
  
  ${props => props.body && css`
    padding: 0 36px;
    border-bottom: 1px solid #D9D9D9;
    font-size: 16px;
  `}
`

export const StyledTd = styled.td`
  width: 180px;
`

export const StyledTh = styled.th`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  width: 180px;
  user-select: none;
`

export const StyledTrDownWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.85;
  }
`

export const StyledIconsWrapper = styled.div`
  display: flex;
  column-gap: 12px;

  & > svg {
    cursor: pointer;
    height: 18px;
    width: 18px;
    transition: 0.1s ease-in;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const StyledTextWrapper = styled.span`
  display: flex;
  align-items: center;
  width: 134px;
  height: 48px;
  overflow: hidden;
`