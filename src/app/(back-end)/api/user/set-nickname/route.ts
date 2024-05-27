import ServerError, { AUTH_ERROR } from 'src/app/(back-end)/_config/error'
import handleError from 'src/app/(back-end)/_config/error/handler'
import verifyBearerToken from 'src/app/(back-end)/_middleware/bearer'
import service from 'src/app/(back-end)/_services'

export const PATCH = async (request: Request) => {
  try {
    const id = verifyBearerToken()

    const user = await service.user.findUserById(id)
    if (!user) throw new ServerError(AUTH_ERROR.NO_USER)

    const { nickname } = await request.json()
    await service.user.changeNickname({ id, nickname })

    return Response.json({}, { status: 201 })
  } catch (error) {
    return handleError(error)
  }
}
