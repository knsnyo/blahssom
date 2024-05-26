import { IUser } from 'src/@types/user'
import Feature from 'src/app/(front-end)/__features'
import { useAppDispatch } from 'src/app/(front-end)/__features/_hooks/redux'
import Api from 'src/app/(front-end)/__features/action/api'
import User from 'src/app/(front-end)/__features/user'

const useLogic = (user: IUser) => {
  const my = Feature.Hooks.useAppSelector((state) => {
    return state.user.user
  })
  const dispatch = useAppDispatch()

  const _follow = async () => {
    await Api.follow(user._id)
    dispatch(User.Action.follow(user._id))
  }

  const _unfollow = async () => {
    await Api.unfollow(user._id)
    dispatch(User.Action.follow(user._id))
  }

  return {
    value: {
      isMe: my?._id === user?._id,
      isFollow: (my?.following ?? []).includes(user?._id),
    },
    handler: {
      follow: _follow,
      unfollow: _unfollow,
    },
  }
}

export default useLogic
