import mongoose from 'mongoose'

const connectToMongoDB = () => {
  if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI, () =>
      console.log(`Connected to mongoBD`)
    )
  } else {
    console.log('Failed to connect')
  }

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error: '))
  db.once('open', function () {
    console.log('Connected successfully')
  })

  return db
}

export default connectToMongoDB()
