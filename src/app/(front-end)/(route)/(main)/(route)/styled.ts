import Shared from 'src/app/(front-end)/____shared'
import { styled } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  max-width: ${Shared.STYLE.SIZE.maxWidth};
`

export const Container = styled.section`
  @media (min-height: calc(100vh - ${Shared.STYLE.SIZE
      .bottombarHeight} - ${Shared.STYLE.SIZE.topbarHeigth})) {
    margin-bottom: ${Shared.STYLE.SIZE.bottombarHeight};
  }
  margin-bottom: ${Shared.STYLE.SIZE.bottombarHeight};
`
