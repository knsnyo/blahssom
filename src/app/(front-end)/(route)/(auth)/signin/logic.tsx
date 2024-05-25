'use client'

import { useRouter } from 'next/navigation'
import { IUser } from 'src/@types/user'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'

const useLogic = () => {
  const { open, SnackBar } = Shared.UI.Common.useSnackBar()

  const { value: id, setValue: setId } = Shared.Hooks.useInput()
  const { value: password, setValue: setPassword } = Shared.Hooks.useInput()

  const dispatch = Feature.Hooks.useAppDispatch()

  const router = useRouter()

  const submit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    let response
    try {
      response = await Feature.Auth.Api.signIn({ id, password })
      if (!response.ok) throw response

      const { item: user } = response

      dispatch(Feature.User.Action.signIn(user as IUser))

      if (user?.nickname) router.replace('/')
      else router.replace('/set-nickname')
    } catch (error) {
      open({ message: response!.message as string, color: Shared.STYLE.COLOR.red })
    }
  }

  return {
    value: {
      id,
      password,
    },
    handler: {
      id: setId,
      password: setPassword,
      submit,
    },
    SnackBar,
  }
}

export default useLogic
