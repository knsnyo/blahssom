import Shared from 'src/app/(front-end)/___shared'
import { styled } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: ${Shared.STYLE.SIZE.maxWidth};
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
