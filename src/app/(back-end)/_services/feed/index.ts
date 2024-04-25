import Feed from 'src/app/(back-end)/_models/feed'

export const queryFeed = async (query: URLSearchParams) => {
  const lastId = query.get('lastId')
  const feeds = await Feed.find(lastId ? { _id: { $lt: lastId } } : {})
    .sort({ createdAt: -1 })
    .populate({ path: 'author', select: '-password' })
    .limit(10)
    .lean()

  const DB_LAST = await Feed.findOne().sort({ createdAt: 1 })
  const GET_LAST = feeds?.at(-1)?._id

  const hasNext = !DB_LAST._id.equals(GET_LAST)

  return { feeds, hasNext }
}
