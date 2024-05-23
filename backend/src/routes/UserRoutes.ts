import router from './index'

import { CreateUserController, DeleteUserController, GetUserByEmailController } from '../modules/controllers/UserControllers'
import { AuthMiddleware } from '../middlewares/authMiddleware'
import { validationRegisterMiddleware } from '../modules/middlewares/validationMiddleware'


router.post("/auth/signUp", validationRegisterMiddleware, CreateUserController)

router.delete("/auth/delete", AuthMiddleware.VerifyUser, DeleteUserController)

router.get("/auth/getUser", GetUserByEmailController)