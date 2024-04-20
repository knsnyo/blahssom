import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import Shared from 'src/app/(front-end)/____shared'
import Api from 'src/app/(front-end)/___api'

const useLogic = () => {
  const router = useRouter()
  const { open, SnackBar } = Shared.UI.Common.useSnackBar()

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
      open({ message: response.message, color: Shared.STYLE.COLOR.red })
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
