import { Router } from "express"
import { AuthUserMiddleware } from "../modules/middlewares/UserMiddlewares"
import { ValidationRegisterMiddleware } from "../modules/middlewares/ValidationMeddlewares"
import { CreateUserController, DeleteUserController, GetUserByEmailController } from "../modules/controllers/UserControllers"

const userRoutes = Router() 

userRoutes.post("/auth/signUp", ValidationRegisterMiddleware, CreateUserController)

userRoutes.delete("/auth/deleteUser", AuthUserMiddleware, DeleteUserController)

userRoutes.get("/auth/getUser", AuthUserMiddleware, GetUserByEmailController)

export default userRoutes