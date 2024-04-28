import { IFeed } from 'src/@types/feed'
import Feed from 'src/app/(back-end)/_models/feed'

export const queryFeeds = async (query: URLSearchParams) => {
  const lastId = query.get('lastId')
  const feedId = query.get('feedId')
  const condition: { _id?: any; feed?: any } = { feed: feedId }
  if (lastId) condition._id = { $lt: lastId }

  const feeds = await Feed.find(condition)
    .sort({ createdAt: -1 })
    .populate({ path: 'author', select: '-password' })
    .limit(10)

  const DB_LAST = await Feed.findOne({ feed: feedId }).sort({ createdAt: 1 })
  const GET_LAST = feeds?.at(-1)?._id

  const hasNext = !DB_LAST._id.equals(GET_LAST)

  return { feeds, hasNext }
}

export const getFeedById = async (id: string): Promise<IFeed> => {
  const feed = await Feed.findById(id).populate({
    path: 'author',
    select: '-password',
  })

  return feed
}
