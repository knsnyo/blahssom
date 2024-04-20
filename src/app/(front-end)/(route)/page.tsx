'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import Shared from 'src/app/(front-end)/____shared'

const Page = () => {
  const router = useRouter()

  React.useEffect(() => {
    ;(async () => {
      const response = await Shared.TOKEN_FETCH({
        url: '/api/user/profile',
        method: Shared.METHOD.GET,
      })
      if (!response.ok) router.replace('/signin')
      else router.replace('/feed')
    })()
  }, [])

  return <div />
}

export default Page
