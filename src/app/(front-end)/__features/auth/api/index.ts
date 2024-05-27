import { User } from '@prisma/client'
import { IAuth } from 'src/@types/user/body'
import { METHOD } from 'src/app/(front-end)/__features/_hooks/fetch'
import { generateData } from 'src/app/(front-end)/__features/_utils'

const signUp = async ({ email, password }: IAuth) => {
  const URL = `/api/auth/signup`
  const plainText = `${email}:${password}`
  const encoded = Buffer.from(plainText).toString('base64')
  const response = await fetch(URL, {
    method: METHOD.GET,
    headers: { Authorization: `Basic ${encoded}` },
  })

  const json = await generateData<any>(response)
  return json
}

const signIn = async ({ email, password }: IAuth) => {
  const URL = `/api/auth/signin`
  const plainText = `${email}:${password}`
  const encoded = Buffer.from(plainText).toString('base64')
  const response = await fetch(URL, {
    method: METHOD.GET,
    headers: { Authorization: `Basic ${encoded}` },
  })

  const json = await generateData<User>(response)
  return json
}

const Api = { signUp, signIn }

export default Api
