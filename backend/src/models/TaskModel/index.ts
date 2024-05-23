import { createTask } from './CreateTask'
import { updateTask } from './UpdateTask'
import { deleteTask } from './DeleteTask'
import { getAllTasks } from './GetAllTasks'

const TaskModel = {
    createTask,
    updateTask,
    deleteTask,
    getAllTasks
}

export default TaskModel