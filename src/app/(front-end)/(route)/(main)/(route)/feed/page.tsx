'use client'

import Shared from 'src/app/(front-end)/___shared'
import Widget from 'src/app/(front-end)/_widget'

const Page = () => {
  return (
    <Shared.UI.Element.Stack $fullWidth $direction='column' $paddingX={3}>
      {/* <Widget.Feed.List /> */}
      <Widget.Write.FloatingWriteButton />
    </Shared.UI.Element.Stack>
  )
}

export default Page
