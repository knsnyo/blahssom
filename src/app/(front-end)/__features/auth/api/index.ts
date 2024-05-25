import { IUser } from 'src/@types/user'
import { METHOD } from 'src/app/(front-end)/__features/_hooks/fetch'
import { generateData } from 'src/app/(front-end)/__features/_utils'

interface AuthBody {
  id: string
  password: string
}

const signUp = async ({ id, password }: AuthBody) => {
  const URL = `/api/auth/signup`
  const plainText = `${id}:${password}`
  const encoded = Buffer.from(plainText).toString('base64')
  const response = await fetch(URL, {
    method: METHOD.GET,
    headers: { Authorization: `Basic ${encoded}` },
  })

  const json = await generateData<any>(response)
  return json
}

const signIn = async ({ id, password }: AuthBody) => {
  const URL = `/api/auth/signin`
  const plainText = `${id}:${password}`
  const encoded = Buffer.from(plainText).toString('base64')
  const response = await fetch(URL, {
    method: METHOD.GET,
    headers: { Authorization: `Basic ${encoded}` },
  })

  const json = await generateData<IUser>(response)
  return json
}

const Api = { signUp, signIn }

export default Api
