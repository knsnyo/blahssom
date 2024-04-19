import { DEFAULT_PADDING } from 'src/app/(front-end)/_constants/padding'
import { MAX_WIDTH, TOPBAR_HEIGHT } from 'src/app/(front-end)/_constants/size'
import { styled } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  max-width: ${MAX_WIDTH};
  height: 100%;
`

export const Container = styled.main`
  height: calc(100% - ${TOPBAR_HEIGHT});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: ${DEFAULT_PADDING};
  padding-right: ${DEFAULT_PADDING};
`

export const Section = styled.section`
  display: flex;
  width: 100%;
  max-width: 50rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
