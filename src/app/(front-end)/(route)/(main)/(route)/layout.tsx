'use client'

import { Container, Main } from 'src/app/(front-end)/(route)/(main)/(route)/styled'
import Shared from 'src/app/(front-end)/____shared'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <Shared.UI.Common.TopBar title='쓰레기통' />
      <Container>{children}</Container>
      <Shared.UI.Common.BottomBar />
    </Main>
  )
}

export default Layout
