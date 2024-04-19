'use client'

import useLogic from 'src/app/(front-end)/(route)/(auth)/set-nickname/logic'
import Button from 'src/app/(front-end)/_components/element/button'
import { IconPerson } from 'src/app/(front-end)/_components/element/icon'
import Input from 'src/app/(front-end)/_components/element/input'
import { INPUT_ICON_SIZE } from 'src/app/(front-end)/_constants/size'

const Page = () => {
  const { nicknameHandler, submit, SnackBar } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Input
          type='text'
          placeholder='NICKNAME'
          prefixicon={<IconPerson size={INPUT_ICON_SIZE} />}
          onChange={nicknameHandler}
        />
        <Button onClick={submit}>START</Button>
      </>
    </>
  )
}

export default Page
