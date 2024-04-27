import React from 'react'
import { IFeed } from 'src/@types/feed'
import Feature from 'src/app/(front-end)/__features'

const useLogic = (id: string) => {
  const [feed, setFeed] = React.useState<IFeed>({} as IFeed)
  React.useEffect(() => {
    ;(async () => {
      const response = await Feature.Feed.Api.detailFeed(id)
      if (!response.ok) return

      const { item } = await response.json()
      setFeed(item)
    })()
  }, [])

  return { feed }
}

export default useLogic
