'use client'

import {
  Container,
  Main,
} from 'src/app/(front-end)/(route)/(stack)/(detail)/styled'
import Shared from 'src/app/(front-end)/____shared'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <Shared.UI.Common.TopBar title='' textAlign='start' canBack />
      <Container>{children}</Container>
    </Main>
  )
}

export default Layout
