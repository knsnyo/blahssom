import Feed from 'src/app/(back-end)/_models/feed'

export const queryFeed = async () => {
  const feeds = await Feed.find()
    .sort({ createdAt: -1 })
    .populate({ path: 'author', select: '-password' })
    .limit(10)

  return feeds
}
