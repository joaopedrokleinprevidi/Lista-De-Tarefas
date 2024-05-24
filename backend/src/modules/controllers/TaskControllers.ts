import * as TaskModel from "../../models/taskModel"
import * as TasksControllers from "../../controllers/tasksControllers"
import { UpdateTaskCheckedStatusUseCase } from "../useCases/TasksUseCases"

export const CheckAllTasksController = TasksControllers.CheckAllTasksController(UpdateTaskCheckedStatusUseCase)
export const CreateTaskController = TasksControllers.CreateTaskController(TaskModel)
export const DeleteTaskController = TasksControllers.DeleteTaskController(TaskModel)
export const GetAllTasksController = TasksControllers.GetAllTasksController(TaskModel)
export const UncheckAllTasksController = TasksControllers.UncheckAllTasksController(UpdateTaskCheckedStatusUseCase)
export const UpdateTaskController = TasksControllers.UpdateTaskController(TaskModel)