import Shared from 'src/app/(front-end)/___shared'

interface AuthBody {
  id: string
  password: string
}

const signUp = async ({ id, password }: AuthBody) => {
  const URL = `/api/auth/signup`
  const plainText = `${id}:${password}`
  const encoded = Buffer.from(plainText).toString('base64')
  const response = await fetch(URL, {
    method: Shared.METHOD.GET,
    headers: { Authorization: `Basic ${encoded}` },
  })
  const json = await response.json()
  return { ...json, status: response.status, ok: response.ok }
}

const signIn = async ({ id, password }: AuthBody) => {
  const URL = `/api/auth/signin`
  const plainText = `${id}:${password}`
  const encoded = Buffer.from(plainText).toString('base64')
  const response = await fetch(URL, {
    method: Shared.METHOD.GET,
    headers: { Authorization: `Basic ${encoded}` },
  })
  const json = await response.json()

  return { ...json, status: response.status, ok: response.ok }
}

const Api = { signUp, signIn }

export default Api
