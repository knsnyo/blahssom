import { User } from '@prisma/client'
import { IAuth, INickname } from 'src/@types/user/body'
import { db } from 'src/app/(back-end)/_config/db'

const user = {
  findUserByEmail: async (email: string): Promise<User | null> => {
    const find: User | null = await db.user.findUnique({ where: { email } })

    return find
  },
  findUserById: async (id: string): Promise<User | null> => {
    const find: User | null = await db.user.findUnique({ where: { id } })

    return find
  },
  createUser: async (data: IAuth) => {
    await db.user.create({ data })
  },
  changeNickname: async ({ id, nickname }: INickname) => {
    await db.user.update({ where: { id }, data: { nickname } })
  },
}

export default user
