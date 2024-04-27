'use client'

import { useRouter } from 'next/navigation'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'

const useLogic = () => {
  const router = useRouter()
  const { content, setContent } = Shared.Hooks.useTextArea()

  const submit = async () => {
    const response = await Feature.Feed.Api.writeFeed({ content })
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
