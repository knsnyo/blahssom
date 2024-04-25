import connectDB from 'src/app/(back-end)/_config/db'
import handleError from 'src/app/(back-end)/_config/error/handler'
import verifyBearerToken from 'src/app/(back-end)/_middleware/bearer'
import { getFeedById } from 'src/app/(back-end)/_services/feed'

export const GET = async (request: Request) => {
  try {
    verifyBearerToken()
    await connectDB()

    const id = request.url.split('/').pop() ?? ''

    const feed = await getFeedById(id)

    return Response.json({ item: feed }, { status: 200 })
  } catch (error) {
    return handleError(error)
  }
}
