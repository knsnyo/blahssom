import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Feature from 'src/app/(front-end)/__features'
import { useAppDispatch, useAppSelector } from 'src/app/(front-end)/__features/_hooks/redux'

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
      if (!response.ok) {
        dispatch(Feature.User.Action.signIn(null))
      } else if (!user) {
        dispatch(Feature.User.Action.signIn(await response.json()))
      }

      if (!user && !['/signin', '/signup'].includes(pathname)) {
        console.log(1)
        return router.replace('/signin')
      }
      if (user && !user?.nickname && pathname !== '/set-nickname') {
        console.log(2)
        return router.replace('/set-nickname')
      }
      if (user && user?.nickname && ['/signin', '/signup', '/set-nickname'].includes(pathname)) {
        console.log(3)
        return router.replace('/feed')
      }
    }

    React.useEffect(() => {
      ;(async () => {
        await routerLogic()
      })()
    }, [user, user?.nickname])

    return <Component {...props} />
  }
}

export default withAuth
