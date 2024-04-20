import Shared from 'src/app/(front-end)/____shared'
import {
  MAX_WIDTH,
  TOPBAR_HEIGHT,
} from 'src/app/(front-end)/____shared/style/size'
import { styled } from 'styled-components'

export const Container = styled.nav`
  overflow: hidden;
  /* position: sticky; */
  position: fixed;
  margin: auto;
  bottom: 0;
  width: 100%;
  max-width: ${MAX_WIDTH};
  height: ${TOPBAR_HEIGHT};
  box-sizing: border-box;
  border-top: 1px solid ${Shared.STYLE.COLOR.grey.e4e4e4};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${Shared.STYLE.COLOR.white};
`
