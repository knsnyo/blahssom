import styled from 'styled-components'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  width: number
  height: number
  bgColor?: string
  left?: number | string
  right?: number | string
  bottom?: number | string
  top?: number | string
  opacity?: number
  borderRadius?: number
}

export const Container = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: ${(props) => {
    return `${props.width}px`
  }};
  height: ${(props) => {
    return `${props.height}px`
  }};
  background-color: ${(props) => {
    return props.bgColor
  }};
  border-radius: ${(props) => {
    return `${props.borderRadius}px`
  }};
  opacity: ${(props) => {
    return props.opacity
  }};
  left: ${(props) => {
    return props.left
  }};
  right: ${(props) => {
    return props.right
  }};
  top: ${(props) => {
    return props.top
  }};
  bottom: ${(props) => {
    return props.bottom
  }};
`

const Floating = (props: IProps) => {
  return <Container {...props}>{props.children}</Container>
}

export default Floating
