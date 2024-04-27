'use client'

import React from 'react'
import { IInfinity } from 'src/@types/__init'
import { IFeed } from 'src/@types/feed'
import { apiQueryDependentFeeds, apiQueryFeeds } from 'src/app/(front-end)/___api/feed'

const useLogic = (feedId?: string) => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [feeds, setFeeds] = React.useState<IFeed[]>([])
  const [hasNext, setHasNext] = React.useState(true)

  const api = feedId ? apiQueryDependentFeeds : apiQueryFeeds

  const refetch = async () => {
    setLoading(true)
    if (loading) return
    const lastId = feeds.slice(-1)?.at(0)?._id
    const response = await api({ lastId, feedId })
    setLoading(false)

    setError(!response.ok)
    if (!response.ok) return

    const { items, hasNext: _hasNext }: IInfinity = await response.json()
    setFeeds((prev) => {
      return prev.concat(items as IFeed[])
    })
    setHasNext(_hasNext)
  }
  React.useEffect(() => {}, [feeds])

  return { loading, error, feeds, hasNext, refetch }
}

export default useLogic
