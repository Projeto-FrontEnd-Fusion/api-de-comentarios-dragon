import type { Request, Response } from 'express'
import Comments from '../models/comments.js'
import { formatData } from '../utils/format-date.js'

class Comment {
	async createComment(req: Request, res: Response) {
		const commentData = req.body
		const comment = {
			...commentData,
			createdAt: new Date(),
		}

		const data = await Comments.create(comment)
		res.status(201).json({ create: 'success', data })
	}

	async getAll(_req: Request, res: Response) {
		try {
			const comments = await Comments.getAll()

			for (const el of comments) {
				el.createdAt = formatData(el.createdAt)
			}

			res.status(200).json(comments)
		} catch (error) {
			console.error('Error retrieving comments:', error)
			res.status(500).json({ message: 'Erro ao buscar comentários' })
		}
	}
}

export default new Comment()
