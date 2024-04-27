'use client'

import { useRouter } from 'next/navigation'
import Shared from 'src/app/(front-end)/____shared'
import useInput from 'src/app/(front-end)/____shared/hooks/useInput'
import Api from 'src/app/(front-end)/___api'

const useLogic = () => {
  const router = useRouter()
  const { open, SnackBar } = Shared.UI.Common.useSnackBar()

  const { value: id, setValue: setId } = useInput()
  const { value: password, setValue: setPassword } = useInput()

  const submit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    let response
    try {
      response = await Api.Auth.signIn({ id, password })
      if (!response.ok) throw response

      if (!response.nickname) {
        router.replace('/set-nickname')
      } else {
        router.replace('/')
      }
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
