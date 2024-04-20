import COLOR from 'src/app/(front-end)/____shared/style/color'
import SIZE from 'src/app/(front-end)/____shared/style/size'
import { styled } from 'styled-components'

export const Container = styled.nav`
  overflow: hidden;
  /* position: sticky; */
  position: fixed;
  margin: auto;
  bottom: 0;
  width: 100%;
  max-width: ${SIZE.maxWidth};
  height: ${SIZE.topbarHeigth};
  box-sizing: border-box;
  border-top: 1px solid ${COLOR.grey.e4e4e4};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${COLOR.white};
`
