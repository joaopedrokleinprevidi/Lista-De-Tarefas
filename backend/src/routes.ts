import express from 'express';
const router = express.Router();

//Middlewares aqui


//Controllers aqui
import { usersController } from './controllers/UsersController';

//Routers e methods aqui
router.post('/auth/signUp', usersController.createUser)

export default router;