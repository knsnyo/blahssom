import {
  COLOR_GREY_E4E4E4,
  COLOR_WHITE,
} from 'src/app/(front-end)/____shared/style/color'
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
  border-top: 1px solid ${COLOR_GREY_E4E4E4};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${COLOR_WHITE};
`
