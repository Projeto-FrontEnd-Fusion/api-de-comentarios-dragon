import type { Db } from 'mongodb'

async function createDatabase(database: Db) {
	// Check if the collection already exists
	const collections = await database
		.listCollections({ name: 'comments' })
		.toArray()
	if (collections.length > 0) {
		console.log('There is already a collection of "comments".')
		return
	}

	// Create the collection
	await database.createCollection('comments', {
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				required: ['name', 'email', 'comment', 'createdAt'],
				properties: {
					name: {
						bsonType: 'string',
						minLength: 3,
						description:
							'O nome é obrigatório e deve conter ao menos 3 caracteres.',
					},
					githubUser: {
						bsonType: 'string',
						description:
							'O nome de usuário do GitHub é opcional e pode ser omitido.',
					},
					email: {
						bsonType: 'string',
						minLength: 3,
						description:
							'O email é obrigatório e deve conter ao menos 3 caracteres.',
					},
					comment: {
						bsonType: 'string',
						minLength: 3,
						maxLength: 700,
						description:
							'O comentário é obrigatório, deve ter pelo menos 3 caracteres e no máximo 700 caracteres.',
					},
					createdAt: {
						bsonType: 'date',
						description:
							'A data de criação do comentário é obrigatória e deve ser um objeto de data válido.',
					},
				},
			},
		},
	})
}

export default createDatabase
