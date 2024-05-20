import * as TasksControllersModule from "../../controllers/taskControllers"
import * as TaskModel from "../../models/TaskModel"
import { UpdateTaskCheckedStatusUseCase } from "../useCases"

export const CheckAllTasksController = TasksControllersModule.CheckAllTasksController(UpdateTaskCheckedStatusUseCase)
export const CreateTaskController = TasksControllersModule.CreateTaskController(TaskModel)
export const DeleteTaskController = TasksControllersModule.DeleteTaskController(TaskModel)
export const GetAllTasksController = TasksControllersModule.GetAllTasksController(TaskModel)
export const UncheckAllTasksController = TasksControllersModule.UncheckAllTasksController(UpdateTaskCheckedStatusUseCase)
export const UpdateTaskController = TasksControllersModule.UpdateTaskController(TaskModel)