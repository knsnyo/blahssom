'use client'

import useLogic from 'src/app/(route)/(auth)/set-nickname/logic'
import Button from 'src/app/_components/element/button'
import Input from 'src/app/_components/element/input'
import { IconPerson } from 'src/app/_constants/icon'

const Page = () => {
  const { nicknameHandler, submit, SnackBar } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Input
          type='text'
          placeholder='NICKNAME'
          prefixicon={<IconPerson />}
          onChange={nicknameHandler}
        />
        <Button onClick={submit}>START</Button>
      </>
    </>
  )
}

export default Page
