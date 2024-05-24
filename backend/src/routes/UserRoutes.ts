import { Router } from "express"
import { AuthUserMiddleware } from "../modules/middlewares/AuthUserMiddleware"
import { ValidationRegisterMiddleware } from "../modules/middlewares/ValidationMiddleware"
import { CreateUserController, DeleteUserController, GetUserByEmailController } from "../modules/controllers/UserControllers"

const userRoutes = Router() 

userRoutes.post("/auth/signUp", ValidationRegisterMiddleware, CreateUserController)

userRoutes.delete("/auth/deleteUser", AuthUserMiddleware, DeleteUserController)

userRoutes.get("/auth/getUser", AuthUserMiddleware, GetUserByEmailController)

export default userRoutes