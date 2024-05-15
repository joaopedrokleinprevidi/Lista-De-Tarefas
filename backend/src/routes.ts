import express from 'express';
const router = express.Router();

import { AuthMiddleware } from './middlewares/authMiddleware';

import { UsersController, ListController } from './controllers/';

//Authentication
router.post('/auth/signUp',  UsersController.CreateNewUser)

//Tasks
router.get('/tasks/getAll', AuthMiddleware.VerifyUser, ListController.GetAllTasks)

router.post('/tasks/create', AuthMiddleware.VerifyUser, ListController.CreateTask)

router.delete('/tasks/delete', AuthMiddleware.VerifyUser, ListController.DeleteTask)

router.put('/tasks/update', AuthMiddleware.VerifyUser, ListController.UpdateTask)

router.put('/tasks/check', AuthMiddleware.VerifyUser, ListController.CheckAllTasks)


export default router;