import mongoose from 'mongoose'

export const connectToMongoDB = () => {
  if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI, { autoIndex: false }, () =>
      console.log('Connected to MongoDB')
    )
  } else {
    console.log('Failed to connect')
  }
}
