import express from 'express'
const taskRoutes = express.Router() 

import { CheckAllTasksController, CreateTaskController, DeleteTaskController, GetAllTasksController, UncheckAllTasksController, UpdateTaskController } from '../modules/controllers/TaskControllers'
import { AuthMiddleware } from '../middlewares/authMiddleware'
import { validationTaskMiddleware } from '../modules/middlewares/validationMiddleware'


taskRoutes.get("/tasks/getAll", AuthMiddleware.VerifyUser, GetAllTasksController)

taskRoutes.post("/tasks/create", AuthMiddleware.VerifyUser, validationTaskMiddleware, CreateTaskController)

taskRoutes.put("/tasks/update", AuthMiddleware.VerifyUser, validationTaskMiddleware, UpdateTaskController)

taskRoutes.put("/tasks/checkAll", AuthMiddleware.VerifyUser, validationTaskMiddleware, CheckAllTasksController)

taskRoutes.put("/tasks/uncheckAll", AuthMiddleware.VerifyUser, validationTaskMiddleware, UncheckAllTasksController)

taskRoutes.delete("/tasks/delete", AuthMiddleware.VerifyUser, DeleteTaskController)

export default taskRoutes