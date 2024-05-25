'use client'

import { Container, Main } from 'src/app/(front-end)/(route)/(main)/(route)/styled'
import Shared from 'src/app/(front-end)/___shared'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <Shared.UI.Common.TopBar title='글 저장소' />
      <Container>{children}</Container>
      <Shared.UI.Common.BottomBar />
    </Main>
  )
}

export default Layout
