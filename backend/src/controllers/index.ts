import { ControllerCreateTask, ControllerDeleteTask, ControllerGetAllTasks, ControllerGetTask, ControllerUpdateTask } from './ListController'
import { ControllerCreateNewUser } from './UsersController'

export const ListController = {
    CreateTask: ControllerCreateTask,
    DeleteTask: ControllerDeleteTask,
    GetTask: ControllerGetTask,
    GetAllTasks: ControllerGetAllTasks,
    UpdateTask: ControllerUpdateTask
}

export const UsersController = {
    CreateNewUser: ControllerCreateNewUser
}