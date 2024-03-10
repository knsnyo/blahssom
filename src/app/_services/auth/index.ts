import { METHOD } from 'src/app/_services'

interface AuthBody {
  id: string
  password: string
}

export const signUpAPI = async ({ id, password }: AuthBody) => {
  const URL = `/api/auth/signup`
  const plainText = `${id}:${password}`
  const encoded = Buffer.from(plainText).toString('base64')
  const response = await fetch(URL, {
    method: METHOD.GET,
    headers: {
      Authorization: `Basic ${encoded}`,
    },
  })
  return response
}

export const signInAPI = async ({ id, password }: AuthBody) => {
  const URL = `/api/auth/signin`
  const plainText = `${id}:${password}`
  const encoded = Buffer.from(plainText).toString('base64')
  await fetch(URL, {
    method: METHOD.GET,
    headers: {
      Authorization: `Basic ${encoded}`,
    },
  })
}
