import { useRouter } from 'next/navigation'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'

const useLogic = () => {
  const router = useRouter()
  const { open, SnackBar } = Shared.UI.Common.useSnackBar()
  const { value: email, setValue: setEmail } = Shared.Hooks.useInput()
  const { value: password, setValue: setPassword } = Shared.Hooks.useInput()

  const submit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    let response
    try {
      response = await Feature.Auth.Api.signUp({ email, password })
      if (!response.ok) throw response

      router.replace('/signin')
    } catch (error) {
      open({ message: response!.message as string, color: Shared.STYLE.COLOR.red })
    }
  }

  return {
    SnackBar,
    value: {
      email,
      password,
    },
    handler: {
      email: setEmail,
      password: setPassword,
      submit,
    },
  }
}

export default useLogic
