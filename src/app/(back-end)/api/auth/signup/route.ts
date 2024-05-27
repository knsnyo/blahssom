import bcrypt from 'bcryptjs'
import handleError from 'src/app/(back-end)/_config/error/handler'
import verifyBasicToken from 'src/app/(back-end)/_middleware/basic'
import service from 'src/app/(back-end)/_services'

export const GET = async () => {
  try {
    const [email, _]: string[] = verifyBasicToken()

    const SALT = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(_, SALT)

    await service.user.createUser({ email, password })

    return Response.json({}, { status: 200 })
  } catch (error) {
    return handleError(error)
  }
}
