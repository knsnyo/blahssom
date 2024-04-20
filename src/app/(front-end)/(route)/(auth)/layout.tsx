'use client'

import {
  Container,
  Main,
  Section,
} from 'src/app/(front-end)/(route)/(auth)/styled'
import Shared from 'src/app/(front-end)/____shared'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <Shared.UI.Common.TopBar title='Blahssom' />
      <Container>
        <Section>{children}</Section>
      </Container>
    </Main>
  )
}

export default Layout
