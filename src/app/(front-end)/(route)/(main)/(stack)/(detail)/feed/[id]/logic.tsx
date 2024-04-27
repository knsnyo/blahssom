import { usePathname } from 'next/navigation'
import React from 'react'
import { IFeed } from 'src/@types/feed'
import { apiDetailFeed, apiWriteDependentFeed } from 'src/app/(front-end)/___api/feed'

const useLogic = (id: string) => {
  const [feed, setFeed] = React.useState<IFeed>({} as IFeed)
  const [content, setContent] = React.useState('')
  const _feed = usePathname().split('/').pop()

  const submit = async () => {
    const response = await apiWriteDependentFeed({ content, feed: _feed })
    if (!response.ok) return
  }

  const handler = {
    content: (e: React.FormEvent<HTMLTextAreaElement>) => {
      setContent((e.target as HTMLTextAreaElement).value)
    },
    submit,
  }

  React.useEffect(() => {
    ;(async () => {
      const response = await apiDetailFeed(id)
      if (!response.ok) return

      const { item } = await response.json()
      setFeed(item)
    })()
  }, [])

  return { feed, content, handler }
}

export default useLogic
