import { DEFAULT_PADDING } from 'src/app/_constants/padding'
import { MAX_SIZE, TOPBAR_HEIGHT } from 'src/app/_constants/size'
import { styled } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: ${MAX_SIZE};
  height: calc(100% - ${TOPBAR_HEIGHT});
`

export const Main = styled.main`
  height: 100%;
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
