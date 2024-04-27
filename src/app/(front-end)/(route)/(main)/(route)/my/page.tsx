'use client'

import Shared from 'src/app/(front-end)/___shared'
import Widget from 'src/app/(front-end)/_widget'

const Page = () => {
  return (
    <Shared.UI.Element.Stack fullWidth direction='column' paddingX={1}>
      <Widget.User.Info />
    </Shared.UI.Element.Stack>
  )
}

export default Page
