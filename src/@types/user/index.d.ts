import { I_ID } from 'src/@types/__init'

export interface IUser extends I_ID {
  id: string
  password?: string
  nickname?: string
}
