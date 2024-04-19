import * as jwt from 'jsonwebtoken'
import { headers } from 'next/headers'
import ServerError, { AUTH_ERROR } from 'src/app/(back-end)/_config/error'
import { verifyAccessToken } from 'src/app/(back-end)/_services/token'

const verifyBearerToken = (): string => {
  let token = headers().get('Authorization')
  if (!token?.startsWith('Bearer ')) {
    throw new ServerError(AUTH_ERROR.INVALID_TOKEN)
  }
  token = token.replace('Bearer ', '')

  const { _id } = verifyAccessToken(token) as jwt.JwtPayload

  return _id
}

export default verifyBearerToken
