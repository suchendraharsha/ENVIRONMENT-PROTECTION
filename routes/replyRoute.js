import express from 'express';
import { requireSignin, isAdmin } from '../middlewares/authMiddleware.js';
import { CreateReplyController, ReplyController } from '../controllers/replyController.js';

const router=express.Router();

router.get('/reply/:reid',ReplyController);
router.post('/reply',CreateReplyController);

export default router;