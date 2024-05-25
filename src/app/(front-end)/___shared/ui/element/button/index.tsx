'use client'

import COLOR from 'src/app/(front-end)/___shared/style/color'
import styled from 'styled-components'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  theme?: IBUttonTheme
  $opacity?: boolean
}

const Button = (props: IButton) => {
  return (
    <Container type='button' theme={props?.theme ?? TYPE.DEFAULT} {...props}>
      {props.children}
    </Container>
  )
}

const Container = styled.button<IButton>`
  border: none;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  max-width: ${(props: IButton) => {
    return props.theme?.$width
  }};
  height: ${(props: IButton) => {
    return props.theme?.$height
  }};
  border-radius: ${(props: IButton) => {
    return props.theme?.$borderRadius
  }};
  background-color: ${(props: IButton) => {
    return props.theme?.$bgColor
  }};
  color: ${(props: IButton) => {
    return props.theme?.$color
  }};
  &:disabled {
    opacity: 0.3;
    cursor: auto;
  }
  opacity: ${(props: IButton) => {
    return props.$opacity ? 0.3 : 1
  }};
`

export default Button

interface IBUttonTheme {
  $color: string
  $bgColor: string
  $borderRadius: string
  $width: string
  $height: string
}

const TYPE: { [key: string]: IBUttonTheme } = {
  DEFAULT: {
    $color: COLOR.white,
    $bgColor: COLOR.black,
    $borderRadius: '0.8rem',
    $width: '50rem',
    $height: '5rem',
  },
  SMALL: {
    $color: COLOR.white,
    $bgColor: COLOR.blue,
    $borderRadius: '1.5rem',
    $width: '7rem',
    $height: '3rem',
  },
}

Button.TYPE = TYPE
