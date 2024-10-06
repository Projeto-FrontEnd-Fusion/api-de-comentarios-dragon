import client from '../db/connection.js'
import createDatabase from '../db/create-database.js'

interface Icomment {
	name: string
	githubUser: string
	email: string
	comment: string
}

class Comments {
	async create(comment: Icomment) {
		try {
			const database = client.db('Comments')
			await createDatabase(database)

			const collection = database.collection('comments')
			const data = await collection.insertOne(comment)

			return data
		} catch (error) {
			console.error('Error inserting comment:', error)
			throw error
		}
	}
}

export default new Comments()
