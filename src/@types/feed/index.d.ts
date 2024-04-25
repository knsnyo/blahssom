import { I_ID } from 'src/@types/__init'
import { IUser } from 'src/@types/user'

export interface IFeed extends I_ID {
  _id: string
  content: string
  createdAt: string
  updatedAt: string
  author: IUser
}
