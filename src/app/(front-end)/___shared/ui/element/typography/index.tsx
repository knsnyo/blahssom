'use client'

import { HtmlHTMLAttributes } from 'react'
import COLOR from 'src/app/(front-end)/___shared/style/color'
import styled from 'styled-components'

interface ITypography extends HtmlHTMLAttributes<HTMLParagraphElement> {
  $fontSize?: string
  $fontWeight?: number
  $color?: string
  $textAlign?: string
  $fullWidth?: boolean
}

const Container = styled.p<ITypography>`
  color: ${(props) => {
    return props?.$color ?? COLOR.black
  }};
  font-size: ${(props: ITypography) => {
    return props?.$fontSize ?? '1rem'
  }};
  font-weight: ${(props: ITypography) => {
    return props?.$fontWeight ?? 400
  }};
  width: ${(props: ITypography) => {
    return props?.$fullWidth ? '100%' : ''
  }};
  text-align: ${(props: ITypography) => {
    return props?.$textAlign ?? 'start'
  }};
`

const Typography = (props: ITypography) => {
  return <Container {...props}>{props.children}</Container>
}

export default Typography
