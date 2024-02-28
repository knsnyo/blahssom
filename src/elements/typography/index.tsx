'use client'

import { HtmlHTMLAttributes } from 'react'
import styled from 'styled-components'

interface ITypography extends HtmlHTMLAttributes<HTMLParagraphElement> {
  size?: string
  fontWeight?: number
}

const Container = styled.p<ITypography>`
  color: ${(props) => {
    return props.color
  }};
  font-size: ${(props: ITypography) => {
    return props?.size ?? '1rem'
  }};
  font-weight: ${(props: ITypography) => {
    return props?.fontWeight ?? 400
  }};
`

const Typography = (props: ITypography) => {
  return <Container {...props}>{props.children}</Container>
}

export default Typography
