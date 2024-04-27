import { IFeed } from 'src/@types/feed'
import Feed from 'src/app/(back-end)/_models/feed'

export const queryFeeds = async (query: URLSearchParams) => {
  const lastId = query.get('lastId')
  let condition: { feed: null; _id?: any } = { feed: null }
  if (lastId) {
    condition._id = { $lt: lastId }
  }

  const feeds = await Feed.find(condition)
    .sort({ createdAt: -1 })
    .populate({ path: 'author', select: '-password' })
    .limit(10)
    .lean()

  const DB_LAST = await Feed.findOne().sort({ createdAt: 1 })
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

export const dependentFeeds = async (feed: string, query: URLSearchParams) => {
  const lastId = query.get('lastId')

  // TODO
  if (!feed) throw new Error()

  let condition: { feed: string; _id?: any } = { feed }
  if (lastId) {
    condition._id = { $lt: lastId }
  }

  const feeds = await Feed.find(condition)
    .sort({ createdAt: -1 })
    .populate({ path: 'author', select: '-password' })
    .populate({ path: 'feed' })
    .limit(10)
    .lean()

  const DB_LAST = await Feed.findOne({ feed }).sort({ createdAt: 1 })
  const GET_LAST = feeds?.at(-1)?._id

  const hasNext = typeof GET_LAST !== 'undefined' && !DB_LAST?._id?.equals(GET_LAST)

  return { feeds, hasNext }
}
