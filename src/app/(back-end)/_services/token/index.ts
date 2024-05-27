import * as jwt from 'jsonwebtoken'
import { IToken } from 'src/@types/token'
import ServerError, { AUTH_ERROR } from 'src/app/(back-end)/_config/error'

const { JWT_ACCESS_KEY, JWT_REFRESH_KEY } = process.env
export const generateAccessToken = (info: IToken) => {
  return jwt.sign(info, JWT_ACCESS_KEY!, { expiresIn: '30m' })
}

export const generateRefreshToken = (info: IToken) => {
  return jwt.sign(info, JWT_REFRESH_KEY!, { expiresIn: '15d' })
}

export const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_ACCESS_KEY!)
  } catch (error) {
    throw new ServerError(AUTH_ERROR.TOKEN_EXPIRED)
  }
}

export const verifyRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_REFRESH_KEY!)
  } catch (error) {
    throw new ServerError(AUTH_ERROR.TOKEN_EXPIRED)
  }
}
