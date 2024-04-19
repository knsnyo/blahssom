import { IUser } from 'src/@types/user'
import User from 'src/app/(back-end)/_models/user'

export const findUser = async (_id: string): Promise<IUser | null> => {
  const user = await User.findById(_id).lean()

  return user ? (user as IUser) : null
}

export const changeUserNickname = async (_id: string, nickname: string) => {
  await User.findByIdAndUpdate(_id, { nickname }, { new: true })
}

export const findUserById = async (id: string) => {
  const user = await User.findOne({ id })
  return user
}
