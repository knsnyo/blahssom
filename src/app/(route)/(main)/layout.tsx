'use client'

import { Container, Main } from 'src/app/(route)/(main)/styled'
import BottomBar from 'src/app/_components/common/bottom-bar'
import TopBar from 'src/app/_components/common/top-bar'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <TopBar title='BLAHSSOM' />
      <Container>{children}</Container>
      <BottomBar />
    </Main>
  )
}

export default Layout
