'use client'

import { IconArrowRight, IconLock, IconPerson } from 'src/app/_constants/icon'

import Link from 'next/link'
import useLogic from 'src/app/(route)/(auth)/signup/logic'
import Button from 'src/app/_components/element/button'
import Input from 'src/app/_components/element/input'
import Typography from 'src/app/_components/element/typography'
import { COLOR_BLUE } from 'src/app/_constants/color'
import styled from 'styled-components'

const Page = () => {
  const { id, password, idHandler, passwordHandler, submit, SnackBar } =
    useLogic()
  const isValid = !id || !password

  return (
    <>
      <SnackBar />
      <Section>
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
        <Button disabled={isValid} onClick={submit}>
          SIGN UP
        </Button>
        <Link href='/signin'>
          <Typography fontSize='2rem' fontWeight={700} color={COLOR_BLUE}>
            GO TO SIGN IN &nbsp;
            <IconArrowRight />
          </Typography>
        </Link>
      </Section>
    </>
  )
}

export default Page

const Section = styled.section`
  display: flex;
  width: 100%;
  max-width: 50rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
