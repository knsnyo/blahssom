import Shared from 'src/app/(front-end)/____shared'
import { styled } from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  width: inherit;
  height: ${Shared.STYLE.SIZE.topbarHeigth};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${Shared.STYLE.COLOR.white};
`
