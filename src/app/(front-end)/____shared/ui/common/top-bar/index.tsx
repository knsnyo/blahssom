'use client'

import { HtmlHTMLAttributes } from 'react'
import { Container } from 'src/app/(front-end)/____shared/ui/common/top-bar/styled'
import Typography from 'src/app/(front-end)/____shared/ui/element/typography'

interface ITopBar extends HtmlHTMLAttributes<Headers> {
  title: string
}

// HOC
const TopBar = (props: ITopBar) => {
  return (
    <Container>
      <Typography fontSize='2rem' fontWeight={700}>
        {props.title}
      </Typography>
    </Container>
  )
}

export default TopBar
