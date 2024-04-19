'use client'

import Typography from 'src/app/(front-end)/_components/element/typography'
import { COLOR_WHITE } from 'src/app/(front-end)/_constants/color'
import { SNACKBAR_Y } from 'src/app/(front-end)/_constants/size'
import styled from 'styled-components'

interface ISnakBar {
  color: string
  message: string
}

const SnackBar = ({ color, message }: ISnakBar) => {
  return (
    <Container color={color}>
      <Typography color={COLOR_WHITE} fontWeight={700} fontSize='1.5rem'>
        {message}
      </Typography>
    </Container>
  )
}

export default SnackBar

const Container = styled.div<{ color: string }>`
  position: fixed;
  background-color: ${(props) => {
    return props.color
  }};
  width: 30rem;
  height: 3rem;
  border-radius: 0.8rem;
  top: ${SNACKBAR_Y};
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
