import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import Shared from 'src/app/(front-end)/____shared'
import Feature from 'src/app/(front-end)/__features'

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
          <Provider store={Feature.store}>{children}</Provider>
        </Shared.StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
