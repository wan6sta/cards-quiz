import styled from 'styled-components'

export const StyledProfileModalInfo = styled.div`
  padding: 22px;
  display: flex;
  flex-direction: column;
  width: 122px;
  height: 104px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
  position: relative;
`

export const StyledProfileItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`

export const StyledTextWrapper = styled.div`
  &:hover {
    color: black;
  }
`
