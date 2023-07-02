import express from 'express';
import { requireSignin, isAdmin } from '../middlewares/authMiddleware.js';
import formidable from 'express-formidable';
import { CommentController, CreateCommentController, GetAllCommentController, deleteCommentController } from '../controllers/commentController.js';

const router=express.Router();

router.get('/comment/:id',CommentController);
router.get('/all-comment',GetAllCommentController);
router.post('/create-comment',CreateCommentController);
router.delete('/delete-comment/:cid',deleteCommentController);

/* router.post('/activity-register',formidable(),activityRegisterController);
router.post('/activity-register/delete/:rid',deleteActivityRegisterUserController);
router.get('/activity-register/activity',GetActivityRegisterController); */

export default router;