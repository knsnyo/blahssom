'use client'

import useLogic from 'src/app/(front-end)/(route)/(auth)/set-nickname/logic'
import Shared from 'src/app/(front-end)/____shared'
import { IconPerson } from 'src/app/(front-end)/____shared/ui/element/icon'

const Page = () => {
  const { nicknameHandler, submit, SnackBar } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Shared.UI.Element.Input
          type='text'
          placeholder='NICKNAME'
          prefixicon={<IconPerson size={Shared.STYLE.SIZE.icon.input} />}
          onChange={nicknameHandler}
        />
        <Shared.UI.Element.Button onClick={submit}>
          START
        </Shared.UI.Element.Button>
      </>
    </>
  )
}

export default Page
