'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { CUSTOM_FETCH, METHOD } from 'src/app/(front-end)/_services'

const Template = (props: { children: React.ReactNode }) => {
  const router = useRouter()

  React.useEffect(() => {
    ;(async () => {
      const response = await CUSTOM_FETCH({
        url: '/api/user/profile',
        method: METHOD.GET,
      })
      if (response.ok) router.replace('/')
    })()
  }, [])

  return <>{props.children}</>
}

export default Template
