import handleError from 'src/app/(back-end)/_config/error/handler'
import verifyBearerToken from 'src/app/(back-end)/_middleware/bearer'
import Follow from 'src/app/(back-end)/_models/follow'

export const GET = async (request: Request) => {
  try {
    const follower = verifyBearerToken()
    const following = request.url.split('/').pop() ?? ''

    await new Follow({ follower, following })

    return Response.json({ status: 200 })
  } catch (error) {
    return handleError(error)
  }
}

export const DELETE = async (request: Request) => {
  try {
    const follower = verifyBearerToken()
    const following = request.url.split('/').pop() ?? ''

    await Follow.findOneAndDelete({ follower, following })

    return Response.json({ status: 200 })
  } catch (error) {
    return handleError(error)
  }
}
