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
        console.log(1)
        router.replace('/signin')
        return
      }
      if (user && !user?.nickname && !['/set-nickname'].includes(pathname)) {
        console.log(2)
        router.replace('/set-nickname')
        return
      }
      if (user && ['/signin', '/signup', '/set-nickname'].includes(pathname)) {
        console.log(3)
        router.replace('/feed')
        return
      }
      console.log(4)
    }, [user])

    return <Component {...props} />
  }
}

export default withAuth
