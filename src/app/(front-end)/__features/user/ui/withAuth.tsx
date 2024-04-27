import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Api from 'src/app/(front-end)/___api'
import { useAppDispatch, useAppSelector } from 'src/app/(front-end)/__features/hooks'
import { signIn } from 'src/app/(front-end)/__features/user/model'

const withAuth = (Component: React.ComponentType<{ children: React.ReactNode }>) => {
  // eslint-disable-next-line react/function-component-definition
  return (props: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const router = useRouter()
    const user = useAppSelector((s) => {
      return s.user
    })
    const dispatch = useAppDispatch()

    const routerLogic = async () => {
      const response = await Api.User.getProfile()
      if (!response.ok) dispatch(signIn({}))
      else dispatch(signIn(await response.json()))
    }

    React.useEffect(() => {
      ;(async () => {
        await routerLogic()
      })()
    }, [])

    return <Component {...props} />
  }
}

export default withAuth
