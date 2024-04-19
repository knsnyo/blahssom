'use client'

import { Container, Main } from 'src/app/(front-end)/(route)/(main)/styled'
import Widget from 'src/app/(front-end)/_widget'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <Widget.Common.TopBar title='BLAHSSOM' />
      <Container>{children}</Container>
      <Widget.Common.BottomBar />
    </Main>
  )
}

export default Layout
