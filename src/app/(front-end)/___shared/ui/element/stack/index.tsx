'use client'

import styled from 'styled-components'

export interface IStack extends React.HtmlHTMLAttributes<HTMLDivElement> {
  $direction?: string
  $justifyContent?: string
  $alignItems?: string
  $gap?: number
  $fullWidth?: boolean
  $paddingX?: number
}

const Container = styled.div<IStack>`
  ${(props: IStack) => {
    return props.$fullWidth && 'width: 100%'
  }};
  display: flex;
  flex-direction: ${(props: IStack) => {
    return props?.$direction ?? 'row'
  }};
  justify-content: ${(props: IStack) => {
    return props?.$justifyContent ?? 'start'
  }};
  align-items: ${(props: IStack) => {
    return props?.$alignItems ?? 'start'
  }};
  gap: ${(props: IStack) => {
    return `${props?.$gap ?? 0}rem`
  }};
  padding-left: ${(props: IStack) => {
    return `${props?.$paddingX ?? 0}rem`
  }};
  padding-right: ${(props: IStack) => {
    return `${props?.$paddingX ?? 0}rem`
  }};
  box-sizing: border-box;
`

const Stack = (props: IStack) => {
  return <Container {...props}>{props.children}</Container>
}

export default Stack
