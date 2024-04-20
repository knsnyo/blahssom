import COLOR from 'src/app/(front-end)/____shared/style/color'
import SIZE from 'src/app/(front-end)/____shared/style/size'
import { styled } from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  width: inherit;
  height: ${SIZE.topbarHeigth};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${COLOR.white};
`

export const LeadingIcon = styled.div`
  padding-right: 3rem;
`
