import { MAX_WIDTH, TOPBAR_HEIGHT } from 'src/app/_constants/size'
import { styled } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: ${MAX_WIDTH};
`

export const Container = styled.main`
  min-height: calc(100% - ${TOPBAR_HEIGHT});
  height: calc(100% - ${TOPBAR_HEIGHT});
  max-height: calc(100% - ${TOPBAR_HEIGHT});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
