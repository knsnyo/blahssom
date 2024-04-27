import Shared from 'src/app/(front-end)/____shared'
import Widget from 'src/app/(front-end)/_widget'
import useLogic from 'src/app/(front-end)/_widget/feed/ui/list/logic'

interface IProps {
  feed?: string
}

const List = (props: IProps) => {
  const { loading, error, feeds, refetch, hasNext } = useLogic(props.feed)
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
