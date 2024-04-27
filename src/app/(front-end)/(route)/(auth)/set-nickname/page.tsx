'use client'

import useLogic from 'src/app/(front-end)/(route)/(auth)/set-nickname/logic'
import Shared from 'src/app/(front-end)/____shared'

const Page = () => {
  const { nickname, SnackBar, handler } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Shared.UI.Element.Input
          type='text'
          placeholder='NICKNAME'
          prefixicon={<Shared.UI.Element.Icon.Person size={Shared.STYLE.SIZE.icon.input} />}
          onChange={handler.nickname}
          value={nickname}
        />
        <Shared.UI.Element.Button onClick={handler.submit}>START</Shared.UI.Element.Button>
      </>
    </>
  )
}

export default Page
