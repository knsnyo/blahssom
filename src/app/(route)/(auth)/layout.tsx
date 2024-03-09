'use client'

import { MAX_SIZE, TOPBAR_HEIGHT } from 'src/app/_constants/size'

import TopBar from 'src/app/_components/common/top-bar'
import { DEFAULT_PADDING } from 'src/app/_constants/padding'
import styled from 'styled-components'

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Container>
      <TopBar title='BLAHSSOM' />
      <Main>{children}</Main>
    </Container>
  )
}

export default RootLayout

const Container = styled.section`
  width: 100%;
  max-width: ${MAX_SIZE};
  height: calc(100% - ${TOPBAR_HEIGHT});
`

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: ${DEFAULT_PADDING};
  padding-right: ${DEFAULT_PADDING};
`
