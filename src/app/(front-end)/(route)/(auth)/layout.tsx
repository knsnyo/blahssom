'use client'

import { Container, Main, Section } from 'src/app/(front-end)/(route)/(auth)/styled'
import Shared from 'src/app/(front-end)/___shared'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <Shared.UI.Common.TopBar title='쓰레기통' />
      <Container>
        <Section>{children}</Section>
      </Container>
    </Main>
  )
}

export default Layout
