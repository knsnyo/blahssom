import { COLOR_BLACK, COLOR_WHITE } from 'src/app/_constants/color'

import styled from 'styled-components'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  theme?: IBUttonTheme
}

const Button = (props: IButton) => {
  return (
    <Container
      type='button'
      theme={props?.theme ?? BUTTON_TYPE.DEFAULT}
      {...props}
    >
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
    return props.theme?.width
  }};
  height: ${(props: IButton) => {
    return props.theme?.height
  }};
  border-radius: ${(props: IButton) => {
    return props.theme?.borderRadius
  }};
  background-color: ${(props: IButton) => {
    return props.theme?.bgColor
  }};
  color: ${(props: IButton) => {
    return props.theme?.color
  }};
`

export default Button

interface IBUttonTheme {
  color: string
  bgColor: string
  borderRadius: string
  width: string
  height: string
}

export const BUTTON_TYPE: { [key: string]: IBUttonTheme } = {
  DEFAULT: {
    color: COLOR_WHITE,
    bgColor: COLOR_BLACK,
    borderRadius: '0.8rem',
    width: '50rem',
    height: '5rem',
  },
}
