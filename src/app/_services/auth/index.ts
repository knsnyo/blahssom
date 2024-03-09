import { METHOD } from 'src/app/_services'

interface AuthBody {
  id: string
  password: string
}

export const signUpAPI = async (body: AuthBody) => {
  const URL = `/api/auth/signup`
  await fetch(URL, {
    method: METHOD.POST,
    body: JSON.stringify(body),
  })
}

export const signInAPI = async (body: AuthBody) => {
  const URL = `/api/auth/signin`
  const response = await fetch(URL, {
    method: METHOD.POST,
    body: JSON.stringify(body),
  })
  const user = await response.json()
  return user
}
