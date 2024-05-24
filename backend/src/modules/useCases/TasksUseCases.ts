import * as TaskModel from "../../models/taskModel"
import * as TaskUseCase from "../../useCases/tasksUseCases"

export const UpdateTaskCheckedStatusUseCase = TaskUseCase.UpdateTaskCheckedStatusUseCase(TaskModel)