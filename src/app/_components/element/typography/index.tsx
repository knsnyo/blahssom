'use client'

import { HtmlHTMLAttributes } from 'react'
import { COLOR_BLACK } from 'src/app/_constants/color'
import styled from 'styled-components'

interface ITypography extends HtmlHTMLAttributes<HTMLParagraphElement> {
  fontSize?: string
  fontWeight?: number
  color?: string
}

const Container = styled.p<ITypography>`
  color: ${(props) => {
    return props?.color ?? COLOR_BLACK
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
