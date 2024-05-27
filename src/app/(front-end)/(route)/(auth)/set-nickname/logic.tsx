'use client'

import { useRouter } from 'next/navigation'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'

const useLogic = () => {
  const { value: nickname, setValue: setNickname } = Shared.Hooks.useInput()
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
    value: { nickname },
    SnackBar,
    handler: { submit, nickname: setNickname },
  }
}

export default useLogic
