import mongoose, { Schema } from 'mongoose'

const DBFeed: Schema = new Schema(
  {
    parent: {
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
  },
  { timestamps: true },
)

export default mongoose.models.Feed || mongoose.model('Feed', DBFeed)
