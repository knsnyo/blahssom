import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import Shared from 'src/app/(front-end)/____shared'
import Api from 'src/app/(front-end)/___api/'

const useLogic = () => {
  const nickname = useRef('')
  const { open, SnackBar } = Shared.UI.Common.useSnackBar()
  const router = useRouter()

  const nicknameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    nickname.current = e.target.value
  }

  const submit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    let response
    try {
      response = await Api.User.setNickname({ nickname: nickname.current })
      if (!response.ok) throw response
      router.replace('/')
    } catch (error) {
      open({ message: response.message, color: Shared.STYLE.COLOR.red })
    }
  }

  return { nicknameHandler, submit, SnackBar }
}

export default useLogic
