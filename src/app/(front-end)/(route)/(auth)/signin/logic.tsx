'use client'

import Shared from 'src/app/(front-end)/___shared'
import useInput from 'src/app/(front-end)/___shared/hooks/useInput'
import Feature from 'src/app/(front-end)/__features'

const useLogic = () => {
  const { open, SnackBar } = Shared.UI.Common.useSnackBar()

  const { value: id, setValue: setId } = useInput()
  const { value: password, setValue: setPassword } = useInput()

  const dispatch = Feature.Hooks.useAppDispatch()

  const submit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    let response
    try {
      response = await Feature.Auth.Api.signIn({ id, password })
      if (!response.ok) throw response

      const { item: user } = response

      dispatch(Feature.User.Action.signIn(user))
    } catch (error) {
      open({ message: response?.message, color: Shared.STYLE.COLOR.red })
    }
  }

  return {
    id,
    password,
    handler: {
      id: setId,
      password: setPassword,
      submit,
    },
    SnackBar,
  }
}

export default useLogic
