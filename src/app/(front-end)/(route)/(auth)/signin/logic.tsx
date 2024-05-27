'use client'

import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'

import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'

const useLogic = () => {
  const { open, SnackBar } = Shared.UI.Common.useSnackBar()

  const { value: email, setValue: setEmail } = Shared.Hooks.useInput()
  const { value: password, setValue: setPassword } = Shared.Hooks.useInput()

  const dispatch = Feature.Hooks.useAppDispatch()

  const router = useRouter()

  const submit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    let response
    try {
      response = await Feature.Auth.Api.signIn({ email, password })
      if (!response.ok) throw response

      const { item: user } = response

      dispatch(Feature.User.Action.signIn(user as User))

      if (user?.nickname) router.replace('/')
      else router.replace('/set-nickname')
    } catch (error) {
      open({ message: response!.message as string, color: Shared.STYLE.COLOR.red })
    }
  }

  return {
    value: { email, password },
    handler: { id: setEmail, password: setPassword, submit },
    SnackBar,
  }
}

export default useLogic
