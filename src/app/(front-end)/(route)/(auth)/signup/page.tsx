'use client'

import Link from 'next/link'
import useLogic from 'src/app/(front-end)/(route)/(auth)/signup/logic'
import Shared from 'src/app/(front-end)/____shared'

const Page = () => {
  const { idHandler, passwordHandler, submit, SnackBar } = useLogic()

  return (
    <>
      <SnackBar />
      <>
        <Shared.UI.Element.Input
          type='text'
          placeholder='ID'
          prefixicon={
            <Shared.UI.Element.Icon.Person
              size={Shared.STYLE.SIZE.icon.input}
            />
          }
          onChange={idHandler}
        />
        <Shared.UI.Element.Input
          type='password'
          placeholder='PASSWORD'
          prefixicon={
            <Shared.UI.Element.Icon.Lock size={Shared.STYLE.SIZE.icon.input} />
          }
          onChange={passwordHandler}
        />
        <Shared.UI.Element.Button onClick={submit}>
          SIGN UP
        </Shared.UI.Element.Button>
        <Link href='/signin'>
          <Shared.UI.Element.Typography
            fontSize='2rem'
            fontWeight={700}
            color={Shared.STYLE.COLOR.blue}
          >
            GO TO SIGN IN
          </Shared.UI.Element.Typography>
        </Link>
      </>
    </>
  )
}

export default Page
