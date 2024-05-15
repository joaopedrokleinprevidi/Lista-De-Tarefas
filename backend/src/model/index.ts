import { ModelCreateTask, ModelDeleteTask, ModelUpdateTask } from './ListModel'
import { ModelGetAllTasks } from './ListModel/GetAllTasks'

import { ModelCreateNewUser } from './UsersModel'


export const ListModel = {
    CreateTask: ModelCreateTask,
    DeleteTask: ModelDeleteTask,
    GetAllTasks: ModelGetAllTasks,
    UpdateTask: ModelUpdateTask
}

export const UsersModel = {
    CreateNewUser: ModelCreateNewUser
}