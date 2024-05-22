import router from './index'

import { CreateUserController } from '../controllers/UserControllers'
import { validationRegisterMiddleware } from '../modules/middlewares/validationMiddleware'


router.post("/auth/signUp", validationRegisterMiddleware, CreateUserController)
