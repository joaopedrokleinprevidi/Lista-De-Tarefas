import express from "express"

import { AuthMiddleware } from "./middlewares/authMiddleware"

import {
    CreateTaskController,
    DeleteTaskController,
    GetAllTasksController,
    UpdateTaskController,
    CheckAllTasksController,
    UncheckAllTasksController 
} from "./modules/controllers/TaskControllers"

import { CreateUserController } from "./modules/controllers/UserControlles"

const router = express.Router()

router.post("/auth/signUp", CreateUserController)

router.get("/tasks/getAll", GetAllTasksController)

router.post("/tasks/create", CreateTaskController)

router.delete("/tasks/delete", AuthMiddleware.VerifyUser, DeleteTaskController)

router.put("/tasks/update", AuthMiddleware.VerifyUser, UpdateTaskController)

router.put("/tasks/checkAll", AuthMiddleware.VerifyUser, CheckAllTasksController)

router.put("/tasks/uncheckAll", AuthMiddleware.VerifyUser, UncheckAllTasksController)

export default router;