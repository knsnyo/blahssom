'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import Shared from 'src/app/(front-end)/____shared/'

const Template = (props: { children: React.ReactNode }) => {
  const router = useRouter()

  React.useEffect(() => {
    ;(async () => {
      const response = await Shared.CUSTOM_FETCH({
        url: '/api/user/profile',
        method: Shared.METHOD.GET,
      })
      if (!response.ok) router.replace('/signin')
    })()
  }, [])

  return <>{props.children}</>
}

export default Template
