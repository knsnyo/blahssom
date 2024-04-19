'use client'

import {
  Container,
  Main,
  Section,
} from 'src/app/(front-end)/(route)/(auth)/styled'

import Widget from 'src/app/(front-end)/_widget'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <Widget.Common.TopBar title='Blahssom' />
      <Container>
        <Section>{children}</Section>
      </Container>
    </Main>
  )
}

export default Layout
