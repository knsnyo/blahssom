'use client'

import { Container, Main } from 'src/app/(front-end)/(route)/(main)/(stack)/(detail)/styled'
import Shared from 'src/app/(front-end)/___shared'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <Shared.UI.Common.TopBar textAlign='start' canBack />
      <Container>{children}</Container>
    </Main>
  )
}

export default Layout
