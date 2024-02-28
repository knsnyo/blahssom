import GlobalStyles from 'src/app/global.style'
import StyledComponentsRegistry from 'src/app/registry'

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='en'>
      <body>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
