import COLOR from 'src/app/(front-end)/___shared/style/color'
import SIZE from 'src/app/(front-end)/___shared/style/size'
import { styled } from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  width: inherit;
  height: ${SIZE.topbarHeigth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: ${COLOR.white};
  padding-left: 1rem;
  padding-right: 1rem;
`

export const ActionIcon = styled.div`
  max-width: 20rem;
`
