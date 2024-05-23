import TasksControllers from "../../controllers/TaskControllers"
import TaskModel from "../../models/TaskModel"
import TaskUseCaseModule from "../useCases/TasksUseCases"

export const CheckAllTasksController = TasksControllers.CheckAllTasksController(TaskUseCaseModule)
export const CreateTaskController = TasksControllers.CreateTaskController(TaskModel)
export const DeleteTaskController = TasksControllers.DeleteTaskController(TaskModel)
export const GetAllTasksController = TasksControllers.GetAllTasksController(TaskModel)
export const UncheckAllTasksController = TasksControllers.UncheckAllTasksController(TaskUseCaseModule)
export const UpdateTaskController = TasksControllers.UpdateTaskController(TaskModel)