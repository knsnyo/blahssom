import Shared from 'src/app/(front-end)/____shared'
import { styled } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: ${Shared.STYLE.SIZE.maxWidth};
  margin-bottom: ${Shared.STYLE.SIZE.bottombarHeight};
  overflow-y: hidden;
`

export const Container = styled.section`
  height: calc(100% - ${Shared.STYLE.SIZE.bottombarHeight});
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
