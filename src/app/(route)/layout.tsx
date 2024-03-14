import { Inter } from 'next/font/google'
import GlobalStyles from 'src/app/(route)/global.style'
import StoreProvider from 'src/app/(route)/provider'
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
        <StoreProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  )
}

export default RootLayout
