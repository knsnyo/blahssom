import bcrypt from 'bcryptjs'
import connectDB from 'src/app/(back-end)/_config/db'
import ServerError, { AUTH_ERROR } from 'src/app/(back-end)/_config/error'
import handleError from 'src/app/(back-end)/_config/error/handler'
import verifyBasicToken from 'src/app/(back-end)/_middleware/basic'
import User from 'src/app/(back-end)/_models/user'

export const GET = async () => {
  try {
    const [id, password]: string[] = verifyBasicToken()

    await connectDB()

    const find = await User.findOne({ id })
    if (find) throw new ServerError(AUTH_ERROR.DUPLICATED_ID)

    const SALT = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, SALT)
    await new User({ id, password: hashed }).save()

    return Response.json({}, { status: 200 })
  } catch (error) {
    return handleError(error)
  }
}
