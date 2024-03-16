'use client'

import { IconArrowRight, IconLock, IconPerson } from 'src/app/_constants/icon'

import Link from 'next/link'
import useLogic from 'src/app/(route)/(auth)/signin/logic'
import Button from 'src/app/_components/element/button'
import Input from 'src/app/_components/element/input'
import Typography from 'src/app/_components/element/typography'
import { COLOR_BLUE } from 'src/app/_constants/color'

const Page = () => {
  const { idHandler, passwordHandler, submit, SnackBar } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Input
          type='text'
          placeholder='ID'
          prefixicon={<IconPerson />}
          onChange={idHandler}
        />
        <Input
          type='password'
          placeholder='PASSWORD'
          prefixicon={<IconLock />}
          onChange={passwordHandler}
        />
        <Button onClick={submit}>SIGN IN</Button>
        <Link href='/signup'>
          <Typography fontSize='2rem' fontWeight={700} color={COLOR_BLUE}>
            GO TO SIGN UP &nbsp;
            <IconArrowRight />
          </Typography>
        </Link>
      </>
    </>
  )
}

export default Page
