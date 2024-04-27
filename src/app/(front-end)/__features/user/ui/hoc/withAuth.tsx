import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Feature from 'src/app/(front-end)/__features'
import { useAppDispatch, useAppSelector } from 'src/app/(front-end)/__features/_hooks'

const withAuth = (Component: React.ComponentType<{ children: React.ReactNode }>) => {
  // eslint-disable-next-line react/function-component-definition
  return (props: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const router = useRouter()
    const user = useAppSelector((s) => {
      return s.user.user
    })
    const dispatch = useAppDispatch()

    const routerLogic = async () => {
      const response = await Feature.User.Api.getProfile()
      if (!response.ok && user) {
        dispatch(Feature.User.Action.signIn(null))
      } else if (response.ok && !user) {
        const _user = await response.json()
        dispatch(Feature.User.Action.signIn(_user))
      }

      if (!user && !['/signin', '/signup'].includes(pathname)) {
        return router.replace('/signin')
      }
      if (user && !user?.nickname && pathname !== '/set-nickname') {
        return router.replace('/set-nickname')
      }
      if (user && user?.nickname && ['/signin', '/signup', '/set-nickname'].includes(pathname)) {
        return router.replace('/feed')
      }
    }

    React.useEffect(() => {
      ;(async () => {
        await routerLogic()
      })()
    }, [user])

    return <Component {...props} />
  }
}

export default withAuth
