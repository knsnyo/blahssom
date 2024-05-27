// import connectDB from 'src/app/(back-end)/_config/db'
// import handleError from 'src/app/(back-end)/_config/error/handler'
// import verifyBearerToken from 'src/app/(back-end)/_middleware/bearer'
// import Feed from 'src/app/(back-end)/_models/feed'
// import { queryFeeds } from 'src/app/(back-end)/_services/feed'

// export const GET = async (request: Request) => {
//   try {
//     verifyBearerToken()
//     await connectDB()

//     const { searchParams } = new URL(request.url)

//     const { feeds, hasNext } = await queryFeeds(searchParams)

//     return Response.json({ items: feeds, hasNext }, { status: 200 })
//   } catch (error) {
//     return handleError(error)
//   }
// }

// export const POST = async (request: Request) => {
//   try {
//     const author = verifyBearerToken()
//     await connectDB()

//     const { content, feed } = await request.json()
//     await new Feed({ author, content, feed }).save()

//     return Response.json({}, { status: 201 })
//   } catch (error) {
//     return handleError(error)
//   }
// }
