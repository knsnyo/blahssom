'use client'

import { Inter } from 'next/font/google'
import Shared from 'src/app/(front-end)/____shared'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <Shared.StyledComponentsRegistry>
          <Shared.GlobalStyles />
          {children}
        </Shared.StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
