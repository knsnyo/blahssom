import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { COLOR_RED } from 'src/app/_constants/color'
import useSnackBar from 'src/app/_hooks/_utils/useSnackbar'
import { signInAPI } from 'src/app/_services/auth'

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
      response = await signInAPI({ id: id.current, password: password.current })
      if (!response.ok) throw response

      router.replace('/')
    } catch (error) {
      response = await response?.json()
      if (response?.statusCode !== 403) {
        open({ message: response.message, color: COLOR_RED })
        return
      }
      return router.replace('/set-nickname')
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
