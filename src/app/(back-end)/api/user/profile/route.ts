// import connectDB from 'src/app/(back-end)/_config/db'
// import ServerError, { AUTH_ERROR } from 'src/app/(back-end)/_config/error'
// import handleError from 'src/app/(back-end)/_config/error/handler'
// import verifyBearerToken from 'src/app/(back-end)/_middleware/bearer'
// import { findUser } from 'src/app/(back-end)/_services/user'

// export const GET = async () => {
//   try {
//     const id = verifyBearerToken()
//     await connectDB()

//     const user = await findUser(id)
//     if (!user) throw new ServerError(AUTH_ERROR.NO_USER)

//     return Response.json({ item: user }, { status: 200 })
//   } catch (error) {
//     return handleError(error)
//   }
// }
