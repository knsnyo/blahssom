import { IUser } from 'src/@types/user'

export interface IFeed {
  _id: string
  content: string
  createdAt: string
  updatedAt: string
  author: IUser
}
