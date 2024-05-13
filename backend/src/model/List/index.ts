import { ModelCreateTask, ModelDeleteTask, ModelGetTask, ModelUpdateTask } from './ListItem'
import { ModelGetAllTasks } from './GetAllTasks'

export const ListModel = {
    CreateTask: ModelCreateTask,
    DeleteTask: ModelDeleteTask,
    GetTask: ModelGetTask,
    GetAllTasks: ModelGetAllTasks,
    UpdateTask: ModelUpdateTask
}