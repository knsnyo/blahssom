import { COLOR_WHITE } from 'src/app/_constants/color'
import { TOPBAR_HEIGHT } from 'src/app/_constants/size'
import { styled } from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  width: inherit;
  height: ${TOPBAR_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${COLOR_WHITE};
`
