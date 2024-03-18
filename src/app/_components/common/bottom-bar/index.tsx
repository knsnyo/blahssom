'use client'

import Link from 'next/link'
import { COLOR_BLACK } from 'src/app/_constants/color'
import { IconConfig, IconPerson } from 'src/app/_constants/icon'
import { TOPBAR_HEIGHT } from 'src/app/_constants/size'
import styled from 'styled-components'

const Container = styled.nav`
  position: sticky;
  bottom: 0;
  width: inherit;
  height: ${TOPBAR_HEIGHT};
  box-sizing: border-box;
  border-top: 1px solid ${COLOR_BLACK};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const BottomBar = () => {
  return (
    <Container>
      <Link href='/'>
        <IconPerson />
      </Link>
      <Link href='/config'>
        <IconConfig />
      </Link>
      <Link href='/config'>
        <IconConfig />
      </Link>
      <Link href='/config'>
        <IconConfig />
      </Link>
    </Container>
  )
}

export default BottomBar
