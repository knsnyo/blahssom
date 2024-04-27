'use client'

import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Shared from 'src/app/(front-end)/___shared'
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
          <Provider store={Feature.store}>
            <PersistGate persistor={Feature.pStore}>{children}</PersistGate>
          </Provider>
        </Shared.StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
