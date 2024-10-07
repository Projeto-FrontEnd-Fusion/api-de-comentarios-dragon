import { MongoClient } from 'mongodb'

const uri = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/`
const client = new MongoClient(uri)

async function run() {
	try {
		await client.connect()
		console.log('Successfully connected to the database')
	} catch (error) {
		console.error('Error connecting to MongoDB:', error)
	}
}
await run()

export default client
