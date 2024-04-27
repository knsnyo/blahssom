'use client'

import { useRouter } from 'next/navigation'
import Shared from 'src/app/(front-end)/____shared'
import useInput from 'src/app/(front-end)/____shared/hooks/useInput'
import Api from 'src/app/(front-end)/___api/'

const useLogic = () => {
  const { value: nickname, setValue: setNickname } = useInput()
  const { open, SnackBar } = Shared.UI.Common.useSnackBar()
  const router = useRouter()

  const submit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    let response
    try {
      response = await Api.User.setNickname({ nickname })
      if (!response.ok) throw response
      router.replace('/')
    } catch (error) {
      open({ message: response.message, color: Shared.STYLE.COLOR.red })
    }
  }

  return {
    nickname,
    SnackBar,
    handler: {
      submit,
      nickname: setNickname,
    },
  }
}

export default useLogic
