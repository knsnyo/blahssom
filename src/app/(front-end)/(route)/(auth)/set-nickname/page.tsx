'use client'

import useLogic from 'src/app/(front-end)/(route)/(auth)/set-nickname/logic'
import { INPUT_ICON_SIZE } from 'src/app/(front-end)/____shared/style/size'
import Widget from 'src/app/(front-end)/_widget'
import { IconPerson } from 'src/app/(front-end)/_widget/element/icon'

const Page = () => {
  const { nicknameHandler, submit, SnackBar } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Widget.Element.Input
          type='text'
          placeholder='NICKNAME'
          prefixicon={<IconPerson size={INPUT_ICON_SIZE} />}
          onChange={nicknameHandler}
        />
        <Widget.Element.Button onClick={submit}>START</Widget.Element.Button>
      </>
    </>
  )
}

export default Page
