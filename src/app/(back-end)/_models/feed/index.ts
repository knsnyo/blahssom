import mongoose, { Schema } from 'mongoose'

const DBFeed: Schema = new Schema(
  {
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
