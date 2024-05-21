import { ITask } from "../domain"

export interface ITaskModel {
    createTask: ( userID: string, task: Omit<ITask, "id"> ) => Promise<void>
    deleteTask: ( userID: string, taskID: string ) => Promise<void>
    updateTask: ( userID: string, taskID: string, taskUpdated: Partial<ITask> ) => Promise<void>
    getAllTasks: ( userID: string ) => Promise<ITask[]>
}