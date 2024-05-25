import React from 'react'
import COLOR, { getOpacity } from 'src/app/(front-end)/___shared/style/color'
import Stack from 'src/app/(front-end)/___shared/ui/element/stack'
import styled from 'styled-components'

interface IIconButton extends React.HtmlHTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  text?: string
  $hoverColor?: string
}

const IconButton = React.forwardRef<HTMLDivElement, IIconButton>((props, ref) => {
  return (
    <Container ref={ref} {...props}>
      <Stack $gap={0.5} $alignItems='center' $direction='row'>
        {props.icon}
        {props.text}
      </Stack>
    </Container>
  )
})

export default IconButton

const Container = styled.div<IIconButton>`
  cursor: pointer;

  &:hover {
    background-color: ${(props: IIconButton) => {
      return getOpacity(props.$hoverColor ?? COLOR.black, 30)
    }};
    color: ${(props: IIconButton) => {
      return props.$hoverColor ?? COLOR.black
    }};
  }

  padding: 0.5rem;
  transition-duration: 0.25s;
  border-radius: 0.8rem;
`
