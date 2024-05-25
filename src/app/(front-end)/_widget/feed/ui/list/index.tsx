import { IQuery } from 'src/@types/_query'
import { IFeed } from 'src/@types/feed'
import Shared from 'src/app/(front-end)/___shared'
import Feature from 'src/app/(front-end)/__features'
import Widget from 'src/app/(front-end)/_widget'

interface IProps extends IQuery {}

const List = (props: IProps) => {
  const {
    loading,
    error,
    data: feeds,
    refetch,
    hasNext,
  } = Feature.Hooks.useInfinityQuery<IFeed>(Feature.Feed.Api.queryFeeds, {
    feedId: props.feedId,
    author: props.author,
  })

  return (
    <Shared.UI.Common.InfinityScroll
      hasNext={hasNext}
      data={feeds}
      loading={loading}
      error={error}
      refetch={refetch}
    >
      {feeds?.map((feed) => {
        return <Widget.Feed.Card key={feed._id} feed={feed} route />
      })}
    </Shared.UI.Common.InfinityScroll>
  )
}

export default List
