import * as jwt from 'jsonwebtoken'
import { headers } from 'next/headers'
import { NextRequest } from 'next/server'
import connectDB from 'src/app/(back-end)/api/_config'
import ServerError, { AUTH_ERROR } from 'src/app/(back-end)/api/_error'
import User from 'src/app/(back-end)/api/_model/user'
import handleError from 'src/app/(back-end)/api/_utils/error'

export const PATCH = async (request: NextRequest) => {
  try {
    await connectDB()
    let token = headers().get('Authorization')
    if (!token?.startsWith('Bearer ')) {
      throw new ServerError(AUTH_ERROR.INVALID_TOKEN)
    }
    token = token.replace('Bearer ', '')

    const { _id } = jwt.decode(token) as jwt.JwtPayload

    const findUser = await User.findById(_id)

    if (!findUser) {
      throw new ServerError(AUTH_ERROR.NO_USER)
    }

    const { nickname } = await request.json()

    await User.findByIdAndUpdate(_id, { nickname }, { new: true })

    return Response.json({}, { status: 201 })
  } catch (error) {
    return handleError(error)
  }
}
