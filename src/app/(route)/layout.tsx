import { Inter } from 'next/font/google'
import GlobalStyles from 'src/app/(route)/global.style'
import StoreProvider from 'src/app/(route)/provider'
import StyledComponentsRegistry from 'src/app/(route)/registry'
import SnackBar from 'src/app/_components/common/snack-bar'

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
          <GlobalStyles />
          <StyledComponentsRegistry>
            <SnackBar />
            {children}
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  )
}

export default RootLayout
