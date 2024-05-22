import router from './index'

import { CheckAllTasksController, CreateTaskController, DeleteTaskController, GetAllTasksController, UncheckAllTasksController, UpdateTaskController } from '../modules/controllers/TaskControllers'
import { AuthMiddleware } from '../middlewares/authMiddleware'
import { validationTaskMiddleware } from '../modules/middlewares/validationMiddleware'


router.get("/tasks/getAll", AuthMiddleware.VerifyUser, GetAllTasksController)

router.post("/tasks/create", AuthMiddleware.VerifyUser, validationTaskMiddleware, CreateTaskController)

router.put("/tasks/update", AuthMiddleware.VerifyUser, validationTaskMiddleware, UpdateTaskController)

router.put("/tasks/checkAll", AuthMiddleware.VerifyUser, validationTaskMiddleware, CheckAllTasksController)

router.put("/tasks/uncheckAll", AuthMiddleware.VerifyUser, validationTaskMiddleware, UncheckAllTasksController)

router.delete("/tasks/delete", AuthMiddleware.VerifyUser, DeleteTaskController)