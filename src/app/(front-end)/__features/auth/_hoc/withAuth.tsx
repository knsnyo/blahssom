import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { IUser } from 'src/@types/user'
import { ACCESS_TOKEN, getToken } from 'src/app/(front-end)/___shared/cookie'
import { useAppDispatch, useAppSelector } from 'src/app/(front-end)/__features/_hooks/redux'
import User from 'src/app/(front-end)/__features/user'

const withAuth = (Component: React.ComponentType<{ children: React.ReactNode }>) => {
  // eslint-disable-next-line react/function-component-definition
  return (props: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const router = useRouter()
    const user = useAppSelector((s) => {
      return s?.user.user
    })
    const dispatch = useAppDispatch()

    React.useEffect(() => {
      if (!user && getToken(ACCESS_TOKEN)) {
        ;(async () => {
          const response = await User.Api.getProfile()
          const { item: user } = response

          dispatch(User.Action.signIn(user as IUser))
        })()
      }

      if (pathname === '/') {
        router.replace('/feed')
        return
      }
      if (user && user.nickname && ['/signin', '/signup', '/set-nickname'].includes(pathname)) {
        router.replace('/feed')
        return
      }
      if (user && !user?.nickname && pathname !== '/set-nickname') {
        router.replace('/set-nickname')
      } else if (!user && !['/signin', '/signup'].includes(pathname)) {
        router.replace('/signin')
      }
    }, [user])

    return <Component {...props} />
  }
}

export default withAuth
