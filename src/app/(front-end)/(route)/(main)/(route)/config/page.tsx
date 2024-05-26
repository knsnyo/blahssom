'use client'

import UserDetailPage from 'src/app/(front-end)/(route)/(main)/(stack)/(detail)/user/[id]/page'
import Feature from 'src/app/(front-end)/__features'

const Page = () => {
  const user = Feature.Hooks.useAppSelector((state) => {
    return state.user.user
  })

  return <UserDetailPage params={{ id: user?._id ?? '' }} />
}

export default Page
