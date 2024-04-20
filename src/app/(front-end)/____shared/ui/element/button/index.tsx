import useLogic from 'src/app/(front-end)/(route)/(auth)/set-nickname/logic'
import Shared from 'src/app/(front-end)/____shared'
import { IconPerson } from 'src/app/(front-end)/____shared/ui/element/icon'

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
  &:disabled {
    background-color: ${Shared.STYLE.COLOR.grey.e4e4e4};
  }
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
    color: Shared.STYLE.COLOR.white,
    bgColor: Shared.STYLE.COLOR.black,
    borderRadius: '0.8rem',
    width: '50rem',
    height: '5rem',
  },
}
export const Page = () => {
  const { nicknameHandler, submit, SnackBar } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Shared.UI.Element.Input
          type='text'
          placeholder='NICKNAME'
          prefixicon={<IconPerson size={Shared.STYLE.SIZE.icon.input} />}
          onChange={nicknameHandler}
        />
        <Shared.UI.Element.Button onClick={submit}>
          START
        </Shared.UI.Element.Button>
      </>
    </>
  )
}
