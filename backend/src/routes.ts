import express from 'express';
const router = express.Router();

//Middlewares aqui


//Controllers aqui
import { UsersController, ListController } from './controllers/';

//Routers e methods aqui
router.post('/auth/signUp', UsersController.CreateNewUser)

router.post('/tasks/create', ListController.CreateTask)

router.delete('/tasks/delete', ListController.DeleteTask)

router.put('/tasks/update', ListController.UpdateTask)

router.get('/tasks/getAll', ListController.GetAllTasks)


export default router;