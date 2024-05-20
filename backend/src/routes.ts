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

import {
    validationRegister,
    validationTasks
} from './modules/middlewares/validationMiddleware'

import { CreateUserController } from "./modules/controllers/UserControlles"

const router = express.Router()


router.post("/auth/signUp", validationRegister.execute, CreateUserController)

router.get("/tasks/getAll", AuthMiddleware.VerifyUser, GetAllTasksController)

router.post("/tasks/create", AuthMiddleware.VerifyUser, validationTasks.execute, CreateTaskController)

router.put("/tasks/update", AuthMiddleware.VerifyUser, validationTasks.execute, UpdateTaskController)
router.put("/tasks/checkAll", AuthMiddleware.VerifyUser, validationTasks.execute, CheckAllTasksController)
router.put("/tasks/uncheckAll", AuthMiddleware.VerifyUser, validationTasks.execute, UncheckAllTasksController)

router.delete("/tasks/delete", AuthMiddleware.VerifyUser, DeleteTaskController)

export default router;