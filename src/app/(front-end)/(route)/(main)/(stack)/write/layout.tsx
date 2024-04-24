'use client'

import {
  Container,
  Main,
} from 'src/app/(front-end)/(route)/(main)/(stack)/(detail)/styled'
import Shared from 'src/app/(front-end)/____shared'
import Widget from 'src/app/(front-end)/_widget'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <Shared.UI.Common.TopBar
        textAlign='start'
        canBack
        action={<Widget.Write.Button />}
      />
      <Container>{children}</Container>
    </Main>
  )
}

export default Layout
