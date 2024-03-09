import bcrypt from 'bcryptjs'
import { headers } from 'next/headers'
import connectDB from 'src/app/api/_config'
import { AUTH_ERROR } from 'src/app/api/_error'
import User from 'src/app/api/_model/user'

export const GET = async () => {
  try {
    await connectDB()
    const header = headers()
    let token = header.get('Authorization')
    if (!token?.includes('Basic')) throw Error(AUTH_ERROR.INVALID_TOKEN.message)
    token = token.replace('Basic ', '')
    const decoded = Buffer.from(token, 'base64').toString('utf8')
    const [id, password] = decoded.split(':')

    if (!id || !password) throw Error(AUTH_ERROR.INVALID_TOKEN.message)

    const findUser = await User.findOne({ id })
    const verify = bcrypt.compare(findUser.password, password)
    if (!verify) throw Error()

    return Response.json({}, { status: 200 })
  } catch (error) {
    return Response.json({ error }, { status: 401 })
  }
}
