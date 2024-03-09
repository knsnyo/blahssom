'use client'

import { IconArrowRight, IconLock, IconPerson } from 'src/app/_constants/icon'

import Link from 'next/link'
import Button from 'src/app/_components/element/button'
import Input from 'src/app/_components/element/input'
import Typography from 'src/app/_components/element/typography'
import { COLOR_BLUE } from 'src/app/_constants/color'
import styled from 'styled-components'

const Page = () => {
  return (
    <Section>
      <Input type='text' placeholder='ID' prefixicon={<IconPerson />} />
      <Input type='password' placeholder='PASSWORD' prefixicon={<IconLock />} />
      <Button>SIGN UP</Button>
      <Link href='/signin'>
        <Typography fontSize='2rem' fontWeight={700} color={COLOR_BLUE}>
          GO TO SIGN IN &nbsp;
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
