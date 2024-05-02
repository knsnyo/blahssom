'use client'

import { IUser } from 'src/@types/user'
import Feature from 'src/app/(front-end)/__features'

const Page = () => {
  const dispatch = Feature.Hooks.useAppDispatch()

  const {
    loading,
    data: user,
    error,
  } = Feature.Hooks.useQuery<IUser>(() => {
    return Feature.User.Api.getProfile()
  })

  if (loading) {
    return <div />
  }

  if (error) {
    dispatch(Feature.User.Action.signOut())
    return <div />
  }

  dispatch(Feature.User.Action.signIn(user))
  return <div />
}

export default Page
