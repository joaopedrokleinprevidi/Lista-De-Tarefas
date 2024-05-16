import * as ControllersModule from "../../controllers/taskControllers"
import * as TaskModel from "../../models/TaskModel"
import { UpdateTaskCheckedStatusUseCase } from "../useCases"

export const CheckAllTasksController = ControllersModule.CheckAllTasksController(UpdateTaskCheckedStatusUseCase)
export const CreateTaskController = ControllersModule.CreateTaskController(TaskModel)
export const DeleteTaskController = ControllersModule.DeleteTaskController(TaskModel)
export const GetAllTasksController = ControllersModule.GetAllTasksController(TaskModel)
export const UncheckAllTasksController = ControllersModule.UncheckAllTasksController(UpdateTaskCheckedStatusUseCase)
export const UpdateTaskController = ControllersModule.UpdateTaskController(TaskModel)