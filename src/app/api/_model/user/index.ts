import mongoose, { Schema } from 'mongoose'

const DBUser: Schema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
)

export default mongoose.models.User || mongoose.model('User', DBUser)
