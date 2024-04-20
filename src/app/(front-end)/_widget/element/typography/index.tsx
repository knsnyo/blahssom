'use client'

import { HtmlHTMLAttributes } from 'react'
import Shared from 'src/app/(front-end)/____shared'
import styled from 'styled-components'

interface ITypography extends HtmlHTMLAttributes<HTMLParagraphElement> {
  fontSize?: string
  fontWeight?: number
  color?: string
}

const Container = styled.p<ITypography>`
  color: ${(props) => {
    return props?.color ?? Shared.STYLE.COLOR.black
  }};
  font-size: ${(props: ITypography) => {
    return props?.fontSize ?? '1rem'
  }};
  font-weight: ${(props: ITypography) => {
    return props?.fontWeight ?? 400
  }};
`

const Typography = (props: ITypography) => {
  return <Container {...props}>{props.children}</Container>
}

export default Typography
