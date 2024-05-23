import TaskModel from "../../models/TaskModel"
import TaskUseCase from "../../useCases/TasksUseCases"

const UpdateTaskCheckedStatusUseCase = TaskUseCase.UpdateTaskCheckedStatusUseCase(TaskModel)

const TaskUseCaseModule = {
    UpdateTaskCheckedStatusUseCase
}

export default TaskUseCaseModule
