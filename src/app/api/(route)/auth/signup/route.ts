import bcrypt from 'bcryptjs'
import { headers } from 'next/headers'
import connectDB from 'src/app/api/_config'
import ServerError, { AUTH_ERROR } from 'src/app/api/_error'
import User from 'src/app/api/_model/user'
import handleError from 'src/app/api/_utils/error'

export const GET = async () => {
  try {
    await connectDB()

    const header = headers()
    let token = header.get('Authorization')
    if (!token?.includes('Basic')) {
      throw new ServerError(AUTH_ERROR.INVALID_TOKEN)
    }

    token = token.replace('Basic ', '')
    const decoded = Buffer.from(token, 'base64').toString('utf8')
    const [id, password] = decoded.split(':')
    if (!id || !password) {
      throw new ServerError(AUTH_ERROR.INVALID_TOKEN)
    }

    const findUser = await User.findOne({ id })
    if (findUser) {
      throw new ServerError(AUTH_ERROR.DUPLICATED_ID)
    }

    const SALT = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, SALT)
    const user = new User({
      id: id as string,
      password: hashed,
    })
    await user.save()

    return Response.json({}, { status: 200 })
  } catch (error) {
    return handleError(error)
  }
}
