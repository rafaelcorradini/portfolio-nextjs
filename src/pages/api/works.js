import { MongoClient } from 'mongodb'

let cachedDb = null

async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db = await client.db()

  // Cache the database connection
  cachedDb = db
  return db
}

export default async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = await db.collection('works')
  const works = await collection.find({}).toArray()

  res.status(200).json(works)
}
