'use client'

import Link from 'next/link'
import useLogic from 'src/app/(front-end)/(route)/(auth)/signin/logic'
import Shared from 'src/app/(front-end)/___shared'

const Page = () => {
  const { id, password, SnackBar, handler } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Shared.UI.Element.Input
          type='text'
          placeholder='ID'
          prefixicon={<Shared.UI.Element.Icon.Person size={Shared.STYLE.SIZE.icon.input} />}
          value={id}
          onChange={handler.id}
        />
        <Shared.UI.Element.Input
          type='password'
          placeholder='PASSWORD'
          prefixicon={<Shared.UI.Element.Icon.Lock size={Shared.STYLE.SIZE.icon.input} />}
          value={password}
          onChange={handler.password}
        />
        <Shared.UI.Element.Button onClick={handler.submit}>SIGN IN</Shared.UI.Element.Button>
        <Link href='/signup'>
          <Shared.UI.Element.Typography
            $fontSize='2rem'
            $fontWeight={700}
            $color={Shared.STYLE.COLOR.blue}
          >
            GO TO SIGN UP
          </Shared.UI.Element.Typography>
        </Link>
      </>
    </>
  )
}

export default Page
