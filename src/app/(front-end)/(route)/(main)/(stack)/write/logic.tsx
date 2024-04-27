'use client'

import { useRouter } from 'next/navigation'
import Shared from 'src/app/(front-end)/____shared'
import { apiWriteFeed } from 'src/app/(front-end)/___api/feed'

const useLogic = () => {
  const router = useRouter()
  const { content, setContent } = Shared.Hooks.useTextArea()

  const submit = async () => {
    const response = await apiWriteFeed({ content })
    if (!response.ok) return

    router.replace('/feed')
  }

  const handler = {
    content: setContent,
    submit,
  }

  return { content, handler }
}

export default useLogic
