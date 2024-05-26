import mongoose from 'mongoose'

const FeedSchema: mongoose.Schema = new mongoose.Schema(
  {
    feed: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Feed',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
    bookmarked: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    liked: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
)

type Feed = mongoose.InferSchemaType<typeof FeedSchema>

export default mongoose.model<Feed>('Feed', FeedSchema)
