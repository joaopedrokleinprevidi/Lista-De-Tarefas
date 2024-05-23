import express from 'express'
const userRoutes = express.Router() 

import { CreateUserController, DeleteUserController, GetUserByEmailController } from '../modules/controllers/UserControllers'
import { AuthMiddleware } from '../middlewares/authMiddleware'
import { validationRegisterMiddleware } from '../modules/middlewares/validationMiddleware'


userRoutes.post("/auth/signUp", validationRegisterMiddleware, CreateUserController)

userRoutes.delete("/auth/delete", AuthMiddleware.VerifyUser, DeleteUserController)

userRoutes.get("/auth/getUser", AuthMiddleware.VerifyUser, GetUserByEmailController)

export default userRoutes