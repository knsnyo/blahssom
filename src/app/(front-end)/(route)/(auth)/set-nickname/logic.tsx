import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { COLOR_RED } from 'src/app/(front-end)/_constants/color'
import useSnackBar from 'src/app/(front-end)/_hooks/_utils/useSnackbar'
import { apiSetNickname } from 'src/app/(front-end)/_services/user'

const useLogic = () => {
  const nickname = useRef('')
  const { open, SnackBar } = useSnackBar()
  const router = useRouter()

  const nicknameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    nickname.current = e.target.value
  }

  const submit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    let response
    try {
      response = await apiSetNickname({ nickname: nickname.current })
      if (!response.ok) throw response
      router.replace('/')
    } catch (error) {
      open({ message: response.message, color: COLOR_RED })
    }
  }

  return { nicknameHandler, submit, SnackBar }
}

export default useLogic
