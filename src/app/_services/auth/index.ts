import { METHOD } from 'src/app/_services'

export interface AuthBody {
  id: string
  password: string
}

export const signUpAPI = async ({ id, password }: AuthBody) => {
  const URL = `/api/auth/signup`
  const plainText = `${id}:${password}`
  const encoded = Buffer.from(plainText).toString('base64')
  const response = await fetch(URL, {
    method: METHOD.GET,
    headers: { Authorization: `Basic ${encoded}` },
  })
  const json = await response.json()
  return { ...json, status: response.status, ok: response.ok }
}

export const signInAPI = async ({ id, password }: AuthBody) => {
  const URL = `/api/auth/signin`
  const plainText = `${id}:${password}`
  const encoded = Buffer.from(plainText).toString('base64')
  const response = await fetch(URL, {
    method: METHOD.GET,
    headers: { Authorization: `Basic ${encoded}` },
  })
  const json = await response.json()
  return { ...json, status: response.status, ok: response.ok }
}
