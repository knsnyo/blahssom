import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { COLOR_RED } from 'src/app/(front-end)/____shared/style/color'
import Api from 'src/app/(front-end)/___api'

import useSnackBar from 'src/app/(front-end)/_widget/common/snack-bar/useSnackbar'

const useLogic = () => {
  const router = useRouter()
  const { open, SnackBar } = useSnackBar()

  const id = useRef<string>('')
  const password = useRef<string>('')

  const idHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    id.current = e.target.value
  }
  const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    password.current = e.target.value
  }

  const submit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    let response
    try {
      response = await Api.Auth.signIn({
        id: id.current,
        password: password.current,
      })
      if (!response.ok) throw response

      router.replace('/signin')
    } catch (error) {
      open({ message: response.message, color: COLOR_RED })
    }
  }

  return {
    id,
    password,
    idHandler,
    passwordHandler,
    submit,
    SnackBar,
  }
}

export default useLogic
