'use client'

import { Container, Main } from 'src/app/(front-end)/(route)/(detail)/styled'
import Shared from 'src/app/(front-end)/____shared'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <Shared.UI.Common.TopBar title='Detail' textAlign='start' canBack />
      <Container>{children}</Container>
    </Main>
  )
}

export default Layout
