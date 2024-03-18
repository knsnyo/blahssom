'use client'

import { COLOR_BLACK } from 'src/app/_constants/color'

import { HtmlHTMLAttributes } from 'react'
import Typography from 'src/app/_components/element/typography'
import { TOPBAR_HEIGHT } from 'src/app/_constants/size'
import styled from 'styled-components'

const Container = styled.header`
  position: sticky;
  width: inherit;
  height: ${TOPBAR_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

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
