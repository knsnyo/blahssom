import bcrypt from 'bcryptjs'
import { cookies, headers } from 'next/headers'
import connectDB from 'src/app/api/_config'
import ServerError, { AUTH_ERROR } from 'src/app/api/_error'
import User from 'src/app/api/_model/user'
import handleError from 'src/app/api/_utils/error'
import {
  generateAccessToken,
  generateRefreshToken,
} from 'src/app/api/_utils/token'

export const GET = async () => {
  try {
    await connectDB()
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

    const findUser = await User.findOne({ id })
    if (!findUser) {
      throw new ServerError(AUTH_ERROR.NO_USER)
    }

    const verify = await bcrypt.compare(password, findUser.password)
    if (!verify) {
      throw new ServerError(AUTH_ERROR.UNAUTHENTICATED)
    }

    const { _id, nickname } = findUser
    const accessToken = generateAccessToken({ _id })
    const refreshToken = generateRefreshToken({ _id })

    cookies().set('accessToken', accessToken)
    cookies().set('refreshToken', refreshToken)

    return Response.json({ nickname }, { status: 200 })
  } catch (error) {
    return handleError(error)
  }
}
