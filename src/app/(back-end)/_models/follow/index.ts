import mongoose, { Schema } from 'mongoose'

const DBFollow: Schema = new Schema(
  {
    follower: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    following: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true },
)

export default mongoose.models.Follow || mongoose.model('Follow', DBFollow)
