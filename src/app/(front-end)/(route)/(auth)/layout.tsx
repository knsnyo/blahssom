'use client'

import {
  Container,
  Main,
  Section,
} from 'src/app/(front-end)/(route)/(auth)/styled'
import TopBar from 'src/app/(front-end)/_components/common/top-bar'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Main>
      <TopBar title='BLAHSSOM' />
      <Container>
        <Section>{children}</Section>
      </Container>
    </Main>
  )
}

export default Layout
