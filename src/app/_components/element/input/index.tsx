import { useRef } from 'react'
import { COLOR_BLACK } from 'src/app/_constants/color'
import styled from 'styled-components'

interface IInputTheme {
  borderRadius: string
  width: string
  height: string
  color: string
}

export const INPUT_THEME: { [key: string]: IInputTheme } = {
  DEFAULT: {
    borderRadius: '0.8rem',
    width: '50rem',
    height: '5rem',
    color: COLOR_BLACK,
  },
}

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: IInputTheme
  prefixicon?: React.ReactNode
}

const Input = (props: IInput) => {
  const ref = useRef<HTMLInputElement>(null)

  const onClick = () => {
    ref?.current?.focus()
  }

  return (
    <Border theme={props?.theme ?? INPUT_THEME.DEFAULT} onClick={onClick}>
      {props?.prefixicon}
      <Container
        theme={props.theme ?? INPUT_THEME.DEFAULT}
        {...props}
        ref={ref}
      />
    </Border>
  )
}

export default Input

const Border = styled.div<IInput>`
  border: 1px solid;
  border-color: ${(props: IInput) => {
    return props.theme?.color
  }};
  border-radius: ${(props: IInput) => {
    return props.theme?.borderRadius
  }};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  max-width: ${(props: IInput) => {
    return props.theme?.width
  }};
  height: ${(props: IInput) => {
    return props.theme?.height
  }};
  gap: 1rem;
`

const Container = styled.input<IInput>`
  font-weight: 700;
  cursor: pointer;
  box-sizing: border-box;
  border: none;
  &:focus {
    outline: none;
  }
`
