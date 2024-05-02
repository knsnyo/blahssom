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
      if (!user && !['/signin', '/signup'].includes(pathname)) {
        router.replace('/signin')
        return
      }
      if (user && !user?.nickname && !['/set-nickname'].includes(pathname)) {
        router.replace('/set-nickname')
        return
      }
      if (user && ['/signin', '/signup', '/set-nickname'].includes(pathname)) {
        router.replace('/feed')
        return
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return <Component {...props} />
  }
}

export default withAuth
