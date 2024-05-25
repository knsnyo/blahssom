'use client'

import useLogic from 'src/app/(front-end)/(route)/(auth)/set-nickname/logic'
import Shared from 'src/app/(front-end)/___shared'

const Page = () => {
  const { nickname, SnackBar, handler } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Shared.UI.Element.Input
          type='text'
          placeholder='닉네임'
          prefixicon={<Shared.UI.Element.Icon.Person size={Shared.STYLE.SIZE.icon.input} />}
          onChange={handler.nickname}
          value={nickname}
        />
        <Shared.UI.Element.Button onClick={handler.submit} disabled={!nickname}>
          시작하기
        </Shared.UI.Element.Button>
      </>
    </>
  )
}

export default Page
