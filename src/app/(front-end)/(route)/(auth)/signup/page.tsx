'use client'

import { IconLock, IconPerson } from 'src/app/(front-end)/_widget/element/icon'

import Link from 'next/link'
import useLogic from 'src/app/(front-end)/(route)/(auth)/signup/logic'
import Shared from 'src/app/(front-end)/____shared'
import Widget from 'src/app/(front-end)/_widget/'

const Page = () => {
  const { idHandler, passwordHandler, submit, SnackBar } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Widget.Element.Input
          type='text'
          placeholder='ID'
          prefixicon={<IconPerson size={Shared.STYLE.SIZE.icon.input} />}
          onChange={idHandler}
        />
        <Widget.Element.Input
          type='password'
          placeholder='PASSWORD'
          prefixicon={<IconLock size={Shared.STYLE.SIZE.icon.input} />}
          onChange={passwordHandler}
        />
        <Widget.Element.Button onClick={submit}>SIGN UP</Widget.Element.Button>
        <Link href='/signin'>
          <Widget.Element.Typography
            fontSize='2rem'
            fontWeight={700}
            color={Shared.STYLE.COLOR.blue}
          >
            GO TO SIGN IN
          </Widget.Element.Typography>
        </Link>
      </>
    </>
  )
}

export default Page
