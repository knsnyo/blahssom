import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
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
      // const response = await Api.User.getProfile()
      // if (!response.ok) dispatch(signIn({}))
      // else dispatch(signIn({ user: await response.json() }))
      // if (!user && !['/signin', '/signup'].includes(pathname)) {
      //   return router.replace('/signin')
      // }
      // if (user && !user?.nickname && pathname !== '/set-nickname') {
      //   return router.replace('/set-nickname')
      // }
      // if (user && ['/signin', '/signup', '/set-nickname'].includes(pathname)) {
      //   return router.replace('/feed')
      // }
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
