'use client'

import useLogic from 'src/app/(front-end)/(route)/(main)/(stack)/write/logic'
import { Main } from 'src/app/(front-end)/(route)/(main)/(stack)/write/styled'
import Shared from 'src/app/(front-end)/___shared'
import Widget from 'src/app/(front-end)/_widget'

const Page = () => {
  const { content, handler } = useLogic()

  return (
    <Main>
      <Shared.UI.Common.TopBar
        textAlign='start'
        canBack
        action={
          <Widget.Write.Button onClick={handler.submit} disabled={content.trim().length === 0} />
        }
      />
      <Shared.UI.Element.Stack direction='column' fullWidth>
        <Shared.UI.Element.Stack direction='column' fullWidth paddingX={1}>
          <Widget.Write.Form placeholder='쓰레기 글' value={content} onChange={handler.content} />
        </Shared.UI.Element.Stack>
        <Shared.UI.Element.Divider />
      </Shared.UI.Element.Stack>
    </Main>
  )
}

export default Page
