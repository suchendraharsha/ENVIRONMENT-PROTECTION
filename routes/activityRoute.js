import express from 'express';
import { requireSignin, isAdmin } from '../middlewares/authMiddleware.js';
import { ActivityController, CreateActivityController, deleteActivityController, updateActivityController} from '../controllers/activityController.js';
import { GetActivityRegisterController, activityRegisterController, deleteActivityRegisterUserController, getAllRegisteredUsers } from '../controllers/activityRegistrationController.js';
import formidable from 'express-formidable';

const router=express.Router();

router.get('/activity',ActivityController);
router.get('/all-activity',getAllRegisteredUsers);
router.post('/create-activity',CreateActivityController);
router.put('/update-activity/:id',updateActivityController);
router.delete('/delete-activity',deleteActivityController);

router.post('/activity-register',formidable(),activityRegisterController);
router.delete('/activity-register/delete/:rid',deleteActivityRegisterUserController);
router.get('/activity-register/activity',GetActivityRegisterController);

export default router;