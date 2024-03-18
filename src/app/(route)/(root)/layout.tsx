'use client'

import { Container, Main, Section } from 'src/app/(route)/(root)/styled'
import BottomBar from 'src/app/_components/common/bottom-bar'
import TopBar from 'src/app/_components/common/top-bar'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Container>
      <TopBar title='BLAHSSOM' />
      <Main>
        <Section>{children}</Section>
      </Main>
      <BottomBar />
    </Container>
  )
}

export default Layout
