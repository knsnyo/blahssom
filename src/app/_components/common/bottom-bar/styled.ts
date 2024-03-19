import { COLOR_GREY_E4E4E4, COLOR_WHITE } from 'src/app/_constants/color'
import { TOPBAR_HEIGHT } from 'src/app/_constants/size'
import { styled } from 'styled-components'

export const Container = styled.nav`
  overflow: hidden;
  position: sticky;
  bottom: 0;
  width: inherit;
  height: ${TOPBAR_HEIGHT};
  box-sizing: border-box;
  border-top: 1px solid ${COLOR_GREY_E4E4E4};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${COLOR_WHITE};
`
