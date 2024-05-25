import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { useAppSelector } from 'src/app/(front-end)/__features/_hooks/redux'

const withAuth = (Component: React.ComponentType<{ children: React.ReactNode }>) => {
  // eslint-disable-next-line react/function-component-definition
  return (props: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const router = useRouter()
    const user = useAppSelector((s) => {
      return s.user.user
    })

    React.useEffect(() => {
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
    }, [])

    return <Component {...props} />
  }
}

export default withAuth
