import { Router } from 'express'
import Comment from '../controllers/comment-controller.js'

const router = Router()

router.post('/comments', Comment.createComment)

export default router
