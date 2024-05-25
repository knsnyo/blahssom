import { useRouter } from 'next/navigation'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'

const useLogic = () => {
  const router = useRouter()
  const { open, SnackBar } = Shared.UI.Common.useSnackBar()
  const { value: id, setValue: setId } = Shared.Hooks.useInput()
  const { value: password, setValue: setPassword } = Shared.Hooks.useInput()

  const submit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    let response
    try {
      response = await Feature.Auth.Api.signUp({ id, password })
      if (!response.ok) throw response

      router.replace('/signin')
    } catch (error) {
      open({ message: response!.message as string, color: Shared.STYLE.COLOR.red })
    }
  }

  return {
    id,
    password,
    SnackBar,
    handler: {
      id: setId,
      password: setPassword,
      submit,
    },
  }
}

export default useLogic
