'use client'

import React from 'react'
import { IFeed } from 'src/@types/feed'
import { queryFeed } from 'src/app/(front-end)/___api/feed'

const useLogic = () => {
  const [feeds, setFeeds] = React.useState<IFeed[]>([])

  React.useEffect(() => {
    ;(async () => {
      const response = await queryFeed()
      if (!response) {
        setFeeds([])
        return
      }
      const _feeds: { items: IFeed[] } = await response.json()
      setFeeds(_feeds.items)
    })()
  }, [])

  return { feeds }
}

export default useLogic
