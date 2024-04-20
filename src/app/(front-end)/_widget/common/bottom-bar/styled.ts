import Shared from 'src/app/(front-end)/____shared'
import { styled } from 'styled-components'

export const Container = styled.nav`
  overflow: hidden;
  /* position: sticky; */
  position: fixed;
  margin: auto;
  bottom: 0;
  width: 100%;
  max-width: ${Shared.STYLE.SIZE.maxWidth};
  height: ${Shared.STYLE.SIZE.topbarHeigth};
  box-sizing: border-box;
  border-top: 1px solid ${Shared.STYLE.COLOR.grey.e4e4e4};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${Shared.STYLE.COLOR.white};
`
