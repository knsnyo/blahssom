import * as jwt from 'jsonwebtoken'
import { cookies, headers } from 'next/headers'
import ServerError, { AUTH_ERROR } from 'src/app/(back-end)/_config/error'
import handleError from 'src/app/(back-end)/_config/error/handler'
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from 'src/app/(back-end)/_services/token'

export const GET = async () => {
  try {
    let token = headers().get('Authorization')
    if (!token?.startsWith('Bearer ')) {
      throw new ServerError(AUTH_ERROR.INVALID_TOKEN)
    }

    token = token.replace('Bearer ', '')
    const { id, email } = verifyRefreshToken(token) as jwt.JwtPayload

    const accessToken = generateAccessToken({ id, email })
    const refreshToken = generateRefreshToken({ id, email })
    cookies().set('accessToken', accessToken)
    cookies().set('refreshToken', refreshToken)

    return Response.json({}, { status: 200 })
  } catch (error) {
    cookies().delete('accessToken')
    cookies().delete('refreshToken')
    return handleError(new ServerError(AUTH_ERROR.INVALID_TOKEN))
  }
}
