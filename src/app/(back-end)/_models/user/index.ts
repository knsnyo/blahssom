import mongoose from 'mongoose'

const UserSchema: mongoose.Schema = new mongoose.Schema(
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
    },
    follower: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    bookmarked: [{ type: mongoose.Schema.ObjectId, ref: 'Feed' }],
    liked: [{ type: mongoose.Schema.ObjectId, ref: 'Feed' }],
  },
  { timestamps: true },
)

type User = mongoose.InferSchemaType<typeof UserSchema>

export default mongoose.model<User>('User', UserSchema)
