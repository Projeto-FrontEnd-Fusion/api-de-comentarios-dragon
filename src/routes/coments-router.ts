import { Router } from 'express'
import { validateComment } from '../middleware/validate-comment.js'
import type { Response, NextFunction } from 'express'
import Comment from '../controllers/comment-controller.js'

const router = Router()

router.use((_req, res: Response, next: NextFunction) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET, POST')
	res.header('Access-Control-Allow-Headers', 'Content-Type')

	next()
})

router.post('/comments', validateComment, Comment.createComment)
router.get('/comments', Comment.getAll)

export default router
