import express from 'express';
import { requireSignin, isAdmin } from '../middlewares/authMiddleware.js';
import { CreateLikeController, DeleteLikeController, LikeController, LikeUserController } from '../controllers/likeController.js';

const router=express.Router();

router.delete('/like/:lid/:uid',DeleteLikeController);
router.post('/like',CreateLikeController);
router.get('/all-likes',LikeController);
router.get('/all-user-likes/:uId',LikeUserController);

export default router;