import type { Request, Response } from 'express'
import { formatData } from '../utils/format-date.js'
import Comments from '../models/comments.js'

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
}

export default new Comment()
