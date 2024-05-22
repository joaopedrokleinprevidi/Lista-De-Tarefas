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
    validationRegisterMiddleware,
    validationTaskMiddleware
} from './modules/middlewares/validationMiddleware'

import { CreateUserController } from "./modules/services/UserControllers"

const router = express.Router()


router.post("/auth/signUp", validationRegisterMiddleware, CreateUserController)

router.get("/tasks/getAll", AuthMiddleware.VerifyUser, GetAllTasksController)

router.post("/tasks/create", validationTaskMiddleware, CreateTaskController)

router.put("/tasks/update", AuthMiddleware.VerifyUser, validationTaskMiddleware, UpdateTaskController)
router.put("/tasks/checkAll", AuthMiddleware.VerifyUser, validationTaskMiddleware, CheckAllTasksController)
router.put("/tasks/uncheckAll", AuthMiddleware.VerifyUser, validationTaskMiddleware, UncheckAllTasksController)

router.delete("/tasks/delete", AuthMiddleware.VerifyUser, DeleteTaskController)

export default router;