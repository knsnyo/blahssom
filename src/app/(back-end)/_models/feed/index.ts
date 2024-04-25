import mongoose, { Schema } from 'mongoose'

const DBFeed: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

export default mongoose.models.Feed || mongoose.model('Feed', DBFeed)
