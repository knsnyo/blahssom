import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import connectDB from 'src/app/(back-end)/_config/db'
import ServerError, { AUTH_ERROR } from 'src/app/(back-end)/_config/error'
import handleError from 'src/app/(back-end)/_config/error/handler'
import verifyBasicToken from 'src/app/(back-end)/_middleware/basic'
import { generateAccessToken, generateRefreshToken } from 'src/app/(back-end)/_services/token'
import { findUserById } from 'src/app/(back-end)/_services/user'

export const GET = async () => {
  try {
    const [id, password] = verifyBasicToken()

    await connectDB()

    const find = await findUserById(id)
    if (!find) throw new ServerError(AUTH_ERROR.NO_USER)

    const verify = await bcrypt.compare(password, find.password)
    if (!verify) throw new ServerError(AUTH_ERROR.UNAUTHENTICATED)

    const { _id, nickname } = find
    const accessToken = generateAccessToken({ _id })
    const refreshToken = generateRefreshToken({ _id })
    cookies().set('accessToken', accessToken)
    cookies().set('refreshToken', refreshToken)

    return Response.json({ nickname }, { status: 200 })
  } catch (error) {
    return handleError(error)
  }
}
