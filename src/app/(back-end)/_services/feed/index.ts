// import { IFeed } from 'src/@types/feed'
// import Feed from 'src/app/(back-end)/_models/feed'

// export const queryFeeds = async (query: URLSearchParams) => {
//   const lastId = query.get('lastId')
//   const feed = query.get('feedId')
//   const author = query.get('author')

//   const condition: { _id?: any; feed?: any; author?: any } = { feed }

//   if (lastId) condition._id = { $lt: lastId }
//   if (author) condition.author = author

//   const feeds = await Feed.find(condition)
//     .sort({ createdAt: -1 })
//     .populate({ path: 'author', select: '-password' })
//     .limit(10)

//   const DB_LAST = await Feed.findOne({ feed, author }).sort({ createdAt: 1 })
//   const GET_LAST = feeds?.at(-1)?._id

//   const hasNext = DB_LAST?._id ? !DB_LAST?._id.equals(GET_LAST) : false

//   return { feeds, hasNext }
// }

// export const getFeedById = async (id: string): Promise<IFeed> => {
//   const feed = await Feed.findById(id).populate({
//     path: 'author',
//     select: '-password',
//   })

//   return feed
// }

const feed = {
  createFeed: async () => {},
}
