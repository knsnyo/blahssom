import { DEFAULT_PADDING } from 'src/app/_constants/padding'
import { MAX_WIDTH } from 'src/app/_constants/size'
import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  max-width: ${MAX_WIDTH};
  box-sizing: border-box;
  padding: ${DEFAULT_PADDING};
`
