'use client'

import {
  IconLock,
  IconPerson,
} from 'src/app/(front-end)/_components/element/icon'

import Link from 'next/link'
import useLogic from 'src/app/(front-end)/(route)/(auth)/signin/logic'
import Button from 'src/app/(front-end)/_components/element/button'
import Input from 'src/app/(front-end)/_components/element/input'
import Typography from 'src/app/(front-end)/_components/element/typography'
import { COLOR_BLUE } from 'src/app/(front-end)/_constants/color'
import { INPUT_ICON_SIZE } from 'src/app/(front-end)/_constants/size'

const Page = () => {
  const { idHandler, passwordHandler, submit, SnackBar } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Input
          type='text'
          placeholder='ID'
          prefixicon={<IconPerson size={INPUT_ICON_SIZE} />}
          onChange={idHandler}
        />
        <Input
          type='password'
          placeholder='PASSWORD'
          prefixicon={<IconLock size={INPUT_ICON_SIZE} />}
          onChange={passwordHandler}
        />
        <Button onClick={submit}>SIGN IN</Button>
        <Link href='/signup'>
          <Typography fontSize='2rem' fontWeight={700} color={COLOR_BLUE}>
            GO TO SIGN UP
          </Typography>
        </Link>
      </>
    </>
  )
}

export default Page
