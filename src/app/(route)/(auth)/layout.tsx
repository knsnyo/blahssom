'use client'

import { Container, Main, Section } from 'src/app/(route)/(auth)/styled'
import TopBar from 'src/app/_components/common/top-bar'

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Container>
      <TopBar title='BLAHSSOM' />
      <Main>
        <Section>{children}</Section>
      </Main>
    </Container>
  )
}

export default RootLayout
