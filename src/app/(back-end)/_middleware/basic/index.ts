import { headers } from 'next/headers'
import ServerError, { AUTH_ERROR } from 'src/app/(back-end)/_config/error'

const verifyBasicToken = (): string[] => {
  let token = headers().get('Authorization')
  if (!token?.startsWith('Basic ')) {
    throw new ServerError(AUTH_ERROR.INVALID_TOKEN)
  }

  token = token.replace('Basic ', '')
  const decoded = Buffer.from(token, 'base64').toString('utf8')
  const [id, password] = decoded.split(':')

  if (!id || !password) {
    throw new ServerError(AUTH_ERROR.INVALID_TOKEN)
  }

  return [id, password]
}

export default verifyBasicToken
