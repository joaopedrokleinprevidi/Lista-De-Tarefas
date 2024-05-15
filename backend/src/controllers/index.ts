import { ControllerCheckAllTasks, ControllerCreateTask, ControllerDeleteTask, ControllerGetAllTasks, ControllerUpdateTask } from './ListController'
import { ControllerCreateNewUser } from './UsersController'

export const ListController = {
    CreateTask: ControllerCreateTask,
    DeleteTask: ControllerDeleteTask,
    GetAllTasks: ControllerGetAllTasks,
    UpdateTask: ControllerUpdateTask,
    CheckAllTasks: ControllerCheckAllTasks
}

export const UsersController = {
    CreateNewUser: ControllerCreateNewUser
}