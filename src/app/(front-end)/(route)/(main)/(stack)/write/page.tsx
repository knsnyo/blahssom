'use client'

import Shared from 'src/app/(front-end)/____shared'
import Widget from 'src/app/(front-end)/_widget'

const Page = () => {
  return (
    <Shared.UI.Element.Stack direction='column' fullWidth>
      <Shared.UI.Element.Stack direction='column' fullWidth paddingX={1}>
        <Widget.Write.Form placeholder='쓰레기 글' />
      </Shared.UI.Element.Stack>
      <br />
      <br />
      <hr />
      <br />
      <br />
    </Shared.UI.Element.Stack>
  )
}

export default Page
