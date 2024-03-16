import { Inter } from 'next/font/google'
import StyledComponentsRegistry from 'src/app/(route)/registry'
import GlobalStyles from 'src/app/(route)/styled'

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
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
