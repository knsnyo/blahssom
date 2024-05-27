'use client'

import Link from 'next/link'
import useLogic from 'src/app/(front-end)/(route)/(auth)/signup/logic'
import Shared from 'src/app/(front-end)/___shared'

const Page = () => {
  const { value, SnackBar, handler } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Shared.UI.Element.Input
          type='text'
          placeholder='아이디'
          prefixicon={<Shared.UI.Element.Icon.Person size={Shared.STYLE.SIZE.icon.input} />}
          value={value.email}
          onChange={handler.email}
        />
        <Shared.UI.Element.Input
          type='password'
          placeholder='비밀번호'
          prefixicon={<Shared.UI.Element.Icon.Lock size={Shared.STYLE.SIZE.icon.input} />}
          value={value.password}
          onChange={handler.password}
        />
        <Shared.UI.Element.Button onClick={handler.submit}>회원가입</Shared.UI.Element.Button>
        <Link href='/signin'>
          <Shared.UI.Element.Typography
            $fontSize='2rem'
            $fontWeight={700}
            $color={Shared.STYLE.COLOR.blue}
          >
            이미 회원이십니까?
          </Shared.UI.Element.Typography>
        </Link>
      </>
    </>
  )
}

export default Page
