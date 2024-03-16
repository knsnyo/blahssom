'use client'

import Button from 'src/app/_components/element/button'
import Input from 'src/app/_components/element/input'
import { IconPerson } from 'src/app/_constants/icon'

const Page = () => {
  return (
    <>
      <Input type='text' placeholder='NICKNAME' prefixicon={<IconPerson />} />
      <Button>START</Button>
    </>
  )
}

export default Page
