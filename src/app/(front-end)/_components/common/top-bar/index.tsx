'use client'

import { COLOR_BLACK } from 'src/app/(front-end)/_constants/color'

import { HtmlHTMLAttributes } from 'react'
import { Container } from 'src/app/(front-end)/_components/common/top-bar/styled'
import Typography from 'src/app/(front-end)/_components/element/typography'

interface ITopBar extends HtmlHTMLAttributes<Headers> {
  title: string
}

// HOC
const TopBar = (props: ITopBar) => {
  return (
    <Container>
      <Typography fontSize='2rem' color={COLOR_BLACK} fontWeight={700}>
        {props.title}
      </Typography>
    </Container>
  )
}

export default TopBar
