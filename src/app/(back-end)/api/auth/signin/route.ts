import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import ServerError, { AUTH_ERROR } from 'src/app/(back-end)/_config/error'
import handleError from 'src/app/(back-end)/_config/error/handler'
import verifyBasicToken from 'src/app/(back-end)/_middleware/basic'
import service from 'src/app/(back-end)/_services'
import { generateAccessToken, generateRefreshToken } from 'src/app/(back-end)/_services/token'

export const GET = async () => {
  try {
    const [email, password] = verifyBasicToken()

    const user = await service.user.findUserByEmail(email)
    if (!user) throw new ServerError(AUTH_ERROR.NO_USER)

    const verify = await bcrypt.compare(password, user.password!)
    if (!verify) throw new ServerError(AUTH_ERROR.UNAUTHENTICATED)

    const { id } = user
    const { password: _, ...info } = user

    const accessToken = generateAccessToken({ id, email })
    const refreshToken = generateRefreshToken({ id, email })

    cookies().set('accessToken', accessToken)
    cookies().set('refreshToken', refreshToken)

    return Response.json({ item: info }, { status: 200 })
  } catch (error) {
    return handleError(error)
  }
}
