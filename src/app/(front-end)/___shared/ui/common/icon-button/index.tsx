import React from 'react'
import Stack from 'src/app/(front-end)/___shared/ui/element/stack'
import Typography from 'src/app/(front-end)/___shared/ui/element/typography'
import styled from 'styled-components'

interface IIconButton extends React.HtmlHTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  text?: string
  $color?: string
}

const IconButton = React.forwardRef<HTMLDivElement, IIconButton>((props, ref) => {
  const { icon, text, ...etc } = props

  return (
    <Container ref={ref} {...etc}>
      <Stack $gap={0.5} $alignItems='center' $direction='row'>
        {icon}
        <Typography>{text}</Typography>
      </Stack>
    </Container>
  )
})

export default IconButton

const Container = styled.div`
  cursor: pointer;
`
