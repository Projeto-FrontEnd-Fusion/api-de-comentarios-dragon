import { z } from 'zod'
import type { Request, Response, NextFunction } from 'express'
import { sanitizeFields } from '../utils/sanitize-fields.js'

const commentSchema = z
	.object({
		name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.'),
		githubUser: z.string().optional(),
		email: z
			.string()
			.email()
			.min(3, 'O email deve ter pelo menos 3 caracteres.'),
		comment: z
			.string()
			.min(3, 'O comentário deve ter pelo menos 3 caracteres.')
			.max(700, 'O comentário não pode ter mais que 700 caracteres.'),
	})
	.strict()

export function validateComment(
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	// Sanitizes the request body fields by removing HTML tags and potentially dangerous characters
	sanitizeFields(req.body)

	const data = commentSchema.safeParse(req.body)

	if (data.error) {
		res.status(400).json({
			message: 'Erro de validação',
			details: data.error.errors,
		})
		return
	}

	req.body = data.data

	next()
}
