import { IFollowIds } from 'src/@types/action'
import User from 'src/app/(back-end)/_models/user'

export const addFollow = async ({ follower, following }: IFollowIds) => {
  await Promise.all([
    User.findByIdAndUpdate(follower, { $push: { following } }),
    User.findByIdAndUpdate(following, { $pull: { follower } }),
  ])
}

export const removeFollow = async ({ follower, following }: IFollowIds) => {
  await Promise.all([
    User.findByIdAndUpdate(follower, { $pull: { following } }),
    User.findByIdAndUpdate(following, { $pull: { follower } }),
  ])
}
