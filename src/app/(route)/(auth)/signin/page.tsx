'use client'

import { IconArrowRight, IconLock, IconPerson } from 'src/app/_constants/icon'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Button from 'src/app/_components/element/button'
import Input from 'src/app/_components/element/input'
import Typography from 'src/app/_components/element/typography'
import { COLOR_BLUE } from 'src/app/_constants/color'
import { useAppDispatch, useAppSelector } from 'src/app/_features'
import { changeId, changePassword, init } from 'src/app/_features/auth'
import { signInAPI } from 'src/app/_services/auth'
import styled from 'styled-components'

const Page = () => {
  const router = useRouter()

  const id = useAppSelector((state) => {
    return state.auth.id
  })
  const password = useAppSelector((state) => {
    return state.auth.password
  })

  const dispatch = useAppDispatch()

  const idHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeId(e.target.value))
  }
  const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changePassword(e.target.value))
  }

  const signInButtonHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      await signInAPI({ id, password })
      console.log('yeah')
      router.replace('/set-nickname')
    } catch (error) {
      console.log(error)
      // error-handling
    }
  }

  useEffect(() => {
    dispatch(init())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Section>
      <Input
        type='text'
        placeholder='ID'
        prefixicon={<IconPerson />}
        value={id}
        onChange={idHandler}
      />
      <Input
        type='password'
        placeholder='PASSWORD'
        prefixicon={<IconLock />}
        value={password}
        onChange={passwordHandler}
      />
      <Button onClick={signInButtonHandler}>SIGN IN</Button>
      <Link href='/signup'>
        <Typography fontSize='2rem' fontWeight={700} color={COLOR_BLUE}>
          GO TO SIGN UP &nbsp;
          <IconArrowRight />
        </Typography>
      </Link>
    </Section>
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
