'use client'

import { COLOR_BLACK, COLOR_WHITE } from 'src/constants/color'

import { HtmlHTMLAttributes } from 'react'
import Typography from 'src/elements/typography'
import styled from 'styled-components'

const Container = styled.header`
  position: sticky;
  width: 100vw;
  height: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR_BLACK};
`

interface ITopBar extends HtmlHTMLAttributes<Headers> {
  title: string
}

const TopBar = (props: ITopBar) => {
  return (
    <Container>
      <Typography size='2rem' color={COLOR_WHITE} fontWeight={700}>
        {props.title}
      </Typography>
    </Container>
  )
}

export default TopBar
