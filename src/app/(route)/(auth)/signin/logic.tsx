'use client'

import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { COLOR_RED } from 'src/app/_constants/color'
import useSnackBar from 'src/app/_hooks/_utils/useSnackbar'
import { apiSignIn } from 'src/app/_services/auth'

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
      response = await apiSignIn({ id: id.current, password: password.current })
      if (!response.ok) throw response

      if (!response.nickname) {
        router.replace('/set-nickname')
      } else {
        router.replace('/')
      }
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
