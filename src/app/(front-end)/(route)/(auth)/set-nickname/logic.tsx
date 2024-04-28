'use client'

import { useRouter } from 'next/navigation'
import Shared from 'src/app/(front-end)/___shared'
import useInput from 'src/app/(front-end)/___shared/hooks/useInput'
import Feature from 'src/app/(front-end)/__features'

const useLogic = () => {
  const { value: nickname, setValue: setNickname } = useInput()
  const { open, SnackBar } = Shared.UI.Common.useSnackBar()
  const dispatch = Feature.Hooks.useAppDispatch()
  const router = useRouter()

  const submit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    let response
    try {
      response = await Feature.User.Api.setNickname({ nickname })
      if (!response.ok) throw response
      dispatch(Feature.User.Action.updateNickname(nickname))
      router.replace('/feed')
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
