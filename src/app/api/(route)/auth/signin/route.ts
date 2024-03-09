import bcrypt from 'bcryptjs'
import connectDB from 'src/app/api/_config'
import User from 'src/app/api/_model/user'

export const POST = async (request: Request) => {
  try {
    await connectDB()
    const { id, password } = await request.json()
    if (!id || !password) throw Error()

    const findUser = await User.findOne({ id })
    const verify = bcrypt.compare(findUser.password, password)
    if (!verify) throw Error()

    return Response.json({}, { status: 200 })
  } catch (error) {
    return Response.json({ error }, { status: 401 })
  }
}
