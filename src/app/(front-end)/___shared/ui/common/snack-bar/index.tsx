'use client'

import ReactDOM from 'react-dom'
import COLOR from 'src/app/(front-end)/___shared/style/color'
import Typography from 'src/app/(front-end)/___shared/ui/element/typography'

import styled from 'styled-components'

interface ISnakBar {
  color: string
  message: string
}

const SnackBar = ({ color, message }: ISnakBar) => {
  return ReactDOM.createPortal(
    <Container color={color}>
      <Typography $color={COLOR.white} $fontWeight={700} $fontSize='1.5rem'>
        {message}
      </Typography>
    </Container>,
    window.document.body,
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
  top: 4rem;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
