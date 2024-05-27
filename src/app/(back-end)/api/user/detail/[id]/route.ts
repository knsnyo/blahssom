// import connectDB from 'src/app/(back-end)/_config/db'
// import handleError from 'src/app/(back-end)/_config/error/handler'
// import verifyBearerToken from 'src/app/(back-end)/_middleware/bearer'
// import { findUser } from 'src/app/(back-end)/_services/user'

// export const GET = async (request: Request) => {
//   try {
//     verifyBearerToken()
//     await connectDB()

//     const id = request.url.split('/').pop() ?? ''
//     const user = await findUser(id)

//     return Response.json({ item: user }, { status: 200 })
//   } catch (error) {
//     return handleError(error)
//   }
// }
