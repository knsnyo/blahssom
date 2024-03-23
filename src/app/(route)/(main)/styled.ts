import { BOTTOMBAR_HEIGHT, MAX_WIDTH } from 'src/app/_constants/size'
import { styled } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: ${MAX_WIDTH};
  margin-bottom: ${BOTTOMBAR_HEIGHT};
  overflow-y: hidden;
`

export const Container = styled.section`
  height: calc(100% - ${BOTTOMBAR_HEIGHT});
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`
