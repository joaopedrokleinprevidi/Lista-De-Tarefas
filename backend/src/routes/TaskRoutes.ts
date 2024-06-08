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

taskRoutes.get("/getAll", AuthUserMiddleware, GetAllTasksController)

taskRoutes.post("/create", CreateTaskController)

taskRoutes.put("/update", AuthUserMiddleware, ValidationUpdateTaskMiddleware, UpdateTaskController)

taskRoutes.put("/checkAll", AuthUserMiddleware, ValidationTaskMiddleware, CheckAllTasksController)

taskRoutes.put("/uncheckAll", AuthUserMiddleware, ValidationTaskMiddleware, UncheckAllTasksController)

taskRoutes.delete("/delete", AuthUserMiddleware, DeleteTaskController)

export default taskRoutes