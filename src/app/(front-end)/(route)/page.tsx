'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import Feature from 'src/app/(front-end)/__features'

const Page = () => {
  const router = useRouter()

  React.useEffect(() => {
    ;(async () => {
      const response = await Feature.Hooks.TOKEN_FETCH({
        url: '/api/user/profile',
        method: Feature.Hooks.METHOD.GET,
      })
      if (!response.ok) router.replace('/signin')
      else router.replace('/feed')
    })()
  }, [])

  return <div />
}

export default Page
