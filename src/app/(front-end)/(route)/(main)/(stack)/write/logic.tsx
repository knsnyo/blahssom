'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { writeFeed } from 'src/app/(front-end)/___api/feed'

const useLogic = () => {
  const [content, setContent] = React.useState('')
  const router = useRouter()

  const submit = async () => {
    const response = await writeFeed({ content })
    if (!response.ok) return

    // router.replace('/feed')
  }

  const handler = {
    content: (e: React.FormEvent<HTMLTextAreaElement>) => {
      setContent((e.target as HTMLTextAreaElement).value)
    },
    submit,
  }

  return { content, handler }
}

export default useLogic
