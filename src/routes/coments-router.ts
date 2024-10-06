import { Router } from 'express'
import { validateComment } from '../middleware/validate-comment.js'
import Comment from '../controllers/comment-controller.js'

const router = Router()

router.post('/comments', validateComment, Comment.createComment)
router.get('/comments', Comment.getAll)

export default router
