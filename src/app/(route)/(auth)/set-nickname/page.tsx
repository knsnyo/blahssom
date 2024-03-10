'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Button from 'src/app/_components/element/button'
import Input from 'src/app/_components/element/input'
import { IconPerson } from 'src/app/_constants/icon'
import { useAppDispatch, useAppSelector } from 'src/app/_features'
import { changeNickname, init } from 'src/app/_features/auth'
import styled from 'styled-components'

const Page = () => {
  const router = useRouter()

  const nickname = useAppSelector((state) => {
    return state.auth.nickname
  })

  const dispatch = useAppDispatch()

  const nicknameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeNickname(e.target.value))
  }

  const nicknameButtonHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    try {
      // api call
      router.replace('/')
    } catch (error) {
      //
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
        placeholder='NICKNAME'
        prefixicon={<IconPerson />}
        value={nickname}
        onChange={nicknameHandler}
      />
      <Button onClick={nicknameButtonHandler}>START</Button>
    </Section>
  )
}

export default Page

const Section = styled.section`
  display: flex;
  width: 100%;
  max-width: 50rem;
  flex-direction: column;
  gap: 2rem;
`
