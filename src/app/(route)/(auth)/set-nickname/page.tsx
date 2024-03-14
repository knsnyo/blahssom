'use client'

import Button from 'src/app/_components/element/button'
import Input from 'src/app/_components/element/input'
import { IconPerson } from 'src/app/_constants/icon'
import styled from 'styled-components'

const Page = () => {
  return (
    <Section>
      <Input type='text' placeholder='NICKNAME' prefixicon={<IconPerson />} />
      <Button>START</Button>
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
