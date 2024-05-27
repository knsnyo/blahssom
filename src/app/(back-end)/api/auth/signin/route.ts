// import bcrypt from 'bcryptjs'
// import { cookies } from 'next/headers'
// import { IUser } from 'src/@types/user'
// import connectDB from 'src/app/(back-end)/_config/db'
// import ServerError, { AUTH_ERROR } from 'src/app/(back-end)/_config/error'
// import handleError from 'src/app/(back-end)/_config/error/handler'
// import verifyBasicToken from 'src/app/(back-end)/_middleware/basic'
// import { generateAccessToken, generateRefreshToken } from 'src/app/(back-end)/_services/token'
// import { findUser, findUserById } from 'src/app/(back-end)/_services/user'

// export const GET = async () => {
//   try {
//     const [id, password] = verifyBasicToken()

//     await connectDB()

//     const find: IUser = await findUserById(id)
//     if (!find) throw new ServerError(AUTH_ERROR.NO_USER)

//     const verify = await bcrypt.compare(password, find.password!)
//     if (!verify) throw new ServerError(AUTH_ERROR.UNAUTHENTICATED)

//     const { _id } = find

//     const accessToken = generateAccessToken({ _id })

//     const refreshToken = generateRefreshToken({ _id })

//     cookies().set('accessToken', accessToken)
//     cookies().set('refreshToken', refreshToken)

//     const user = await findUser(_id)

//     return Response.json({ item: user }, { status: 200 })
//   } catch (error) {
//     return handleError(error)
//   }
// }
