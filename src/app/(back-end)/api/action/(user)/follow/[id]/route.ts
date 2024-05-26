import handleError from 'src/app/(back-end)/_config/error/handler'
import verifyBearerToken from 'src/app/(back-end)/_middleware/bearer'
import { addFollow, removeFollow } from 'src/app/(back-end)/_services/action'

export const POST = async (request: Request) => {
  try {
    const follower = verifyBearerToken()
    const following = request.url.split('/').pop()!

    await addFollow({ follower, following })

    return Response.json({}, { status: 201 })
  } catch (error) {
    return handleError(error)
  }
}

export const DELETE = async (request: Request) => {
  try {
    const follower = verifyBearerToken()
    const following = request.url.split('/').pop()!

    await removeFollow({ follower, following })

    return Response.json({}, { status: 204 })
  } catch (error) {
    return handleError(error)
  }
}
