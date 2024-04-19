import { COLOR_WHITE } from 'src/app/(front-end)/____shared/style/color'
import { TOPBAR_HEIGHT } from 'src/app/(front-end)/____shared/style/size'
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