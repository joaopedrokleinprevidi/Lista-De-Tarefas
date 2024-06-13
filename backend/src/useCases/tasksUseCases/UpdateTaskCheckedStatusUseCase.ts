import { ITaskModel, IUpdateTaskCheckedStatusUseCase } from "../../@types" 

export const UpdateTaskCheckedStatusUseCase = ( TaskModel: ITaskModel ) => {

    const execute: IUpdateTaskCheckedStatusUseCase = async ( userID, checked ) => {

        const allTasks = await TaskModel.getAllTasks(userID)
        const updatedTasks = allTasks.map( taskDoc => TaskModel.updateTask(userID, taskDoc.id, { checked }) )

        await Promise.all(updatedTasks)
    }

    return execute
}