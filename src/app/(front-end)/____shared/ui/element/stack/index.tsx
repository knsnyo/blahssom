'use client'

import styled from 'styled-components'

interface IStack extends React.HtmlHTMLAttributes<HTMLDivElement> {
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  gap?: number
}

const Container = styled.div<IStack>`
  display: flex;
  flex-direction: ${(props: IStack) => {
    return props?.flexDirection ?? 'row'
  }};
  justify-content: ${(props: IStack) => {
    return props?.justifyContent ?? 'start'
  }};
  align-items: ${(props: IStack) => {
    return props?.alignItems ?? 'start'
  }};
  gap: ${(props: IStack) => {
    return `${props?.gap ?? 0}rem`
  }};
`

const Stack = (props: IStack) => {
  return <Container {...props}>{props.children}</Container>
}

export default Stack
