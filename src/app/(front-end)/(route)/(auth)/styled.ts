import Shared from 'src/app/(front-end)/___shared'
import { styled } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  max-width: ${Shared.STYLE.SIZE.maxWidth};
  height: 100%;
`

export const Container = styled.main`
  height: calc(100% - ${Shared.STYLE.SIZE.topbarHeigth});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: ${Shared.STYLE.PADDING.default};
  padding-right: ${Shared.STYLE.PADDING.default};
`

export const Section = styled.section`
  display: flex;
  width: 100%;
  max-width: 50rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
