'use client'

import { HtmlHTMLAttributes } from 'react'
import Shared from 'src/app/(front-end)/____shared'
import { Container } from 'src/app/(front-end)/____shared/ui/common/top-bar/styled'

interface ITopBar extends HtmlHTMLAttributes<Headers> {
  title: string
}

// HOC
const TopBar = (props: ITopBar) => {
  return (
    <Container>
      <Shared.UI.Element.Typography fontSize='2rem' fontWeight={700}>
        {props.title}
      </Shared.UI.Element.Typography>
    </Container>
  )
}

export default TopBar
