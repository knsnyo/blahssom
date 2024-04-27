import React from 'react'
import { IFeed } from 'src/@types/feed'
import { apiDetailFeed } from 'src/app/(front-end)/___api/feed'

const useLogic = (id: string) => {
  const [feed, setFeed] = React.useState<IFeed>({} as IFeed)
  React.useEffect(() => {
    ;(async () => {
      const response = await apiDetailFeed(id)
      if (!response.ok) return

      const { item } = await response.json()
      setFeed(item)
    })()
  }, [])

  return { feed }
}

export default useLogic
