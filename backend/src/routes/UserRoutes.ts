import { Router } from "express"
import { AuthUserMiddleware } from "../modules/middlewares/UserMiddlewares"
import { ValidationRegisterMiddleware } from "../modules/middlewares/ValidationMeddlewares"
import { CreateUserController, DeleteUserController, GetUserByEmailController } from "../modules/controllers/UserControllers"

const userRoutes = Router() 

userRoutes.post("/signUp", ValidationRegisterMiddleware, CreateUserController)

userRoutes.delete("/deleteUser", AuthUserMiddleware, DeleteUserController)

userRoutes.get("/getUser", AuthUserMiddleware, GetUserByEmailController)

export default userRoutes