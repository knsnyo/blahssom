/**
 * https://github.com/wpcodevo/nextjs13-mongodb-setup/blob/main/src/lib/connect-db.ts
 */
import _mongoose, { connect } from 'mongoose'

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var DB: {
    promise: ReturnType<typeof connect> | null
    conn: typeof _mongoose | null
  }
}

const { MONGO_URI } = process.env

if (!MONGO_URI) {
  throw new Error('MONGO_URI is undefinded')
}

let cached = global.DB

if (!cached) {
  global.DB = { conn: null, promise: null }
  cached = global.DB
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = connect(MONGO_URI!, opts)
      .then((mongoose) => {
        return mongoose
      })
      .catch((error) => {
        throw error
      })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default connectDB
