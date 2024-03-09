import { Inter } from 'next/font/google'
import GlobalStyles from 'src/app/(route)/global.style'
import StyledComponentsRegistry from 'src/app/(route)/registry'

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
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
