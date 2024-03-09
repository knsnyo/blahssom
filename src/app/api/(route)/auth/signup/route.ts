import bcrypt from 'bcryptjs'
import connectDB from 'src/app/api/_config'
import User from 'src/app/api/_model/user'

export const POST = async (request: Request) => {
  try {
    await connectDB()
    const { id, password } = await request.json()
    if (!id || !password) throw Error()

    const SALT = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, SALT)
    const user = new User({
      id: id as string,
      password: hashed,
    })
    await user.save()
    return Response.json({}, { status: 201 })
  } catch (error) {
    return Response.json({ error })
  }
}
