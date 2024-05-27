import { Router } from "express"
import { AuthUserMiddleware } from "../modules/middlewares/UserMiddlewares"

import {
    ValidationUpdateTaskMiddleware,
    ValidationTaskMiddleware
} from "../modules/middlewares/ValidationMeddlewares"

import {
    CheckAllTasksController,
    CreateTaskController,
    DeleteTaskController,
    GetAllTasksController,
    UncheckAllTasksController,
    UpdateTaskController
} from "../modules/controllers/TaskControllers"

const taskRoutes = Router()

taskRoutes.get("/tasks/getAll", AuthUserMiddleware, GetAllTasksController)

taskRoutes.post("/tasks/create", CreateTaskController)

taskRoutes.put("/tasks/update", AuthUserMiddleware, ValidationUpdateTaskMiddleware, UpdateTaskController)

taskRoutes.put("/tasks/checkAll", AuthUserMiddleware, ValidationTaskMiddleware, CheckAllTasksController)

taskRoutes.put("/tasks/uncheckAll", AuthUserMiddleware, ValidationTaskMiddleware, UncheckAllTasksController)

taskRoutes.delete("/tasks/delete", AuthUserMiddleware, DeleteTaskController)

export default taskRoutes