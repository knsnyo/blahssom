import { NextRequest } from 'next/server'
import connectDB from 'src/app/(back-end)/_config/db'
import handleError from 'src/app/(back-end)/_config/error/handler'
import verifyBearerToken from 'src/app/(back-end)/_middleware/bearer'
import Feed from 'src/app/(back-end)/_models/feed'

export const POST = async (request: NextRequest) => {
  try {
    const userId = verifyBearerToken()
    await connectDB()

    const { content } = await request.json()
    await new Feed({ userId, content }).save()

    return Response.json({}, { status: 201 })
  } catch (error) {
    return handleError(error)
  }
}
