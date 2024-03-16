import * as jwt from 'jsonwebtoken'

interface TokenInfo {
  _id: string
}

export const generateAccessToken = ({ _id }: TokenInfo) => {
  const { JWT_ACCESS_KEY } = process.env
  return jwt.sign({ _id }, JWT_ACCESS_KEY!, { expiresIn: '5m' })
}

export const generateRefreshToken = ({ _id }: TokenInfo) => {
  const { JWT_REFRESH_KEY } = process.env
  return jwt.sign({ _id }, JWT_REFRESH_KEY!, { expiresIn: '15d' })
}
