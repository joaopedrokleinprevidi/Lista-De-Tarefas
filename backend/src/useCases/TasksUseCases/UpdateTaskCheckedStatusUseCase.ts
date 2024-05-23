import { ITaskModel, ITaskUseCase } from "../../@types" 

export const UpdateTaskCheckedStatusUseCase = ( TaskModel: ITaskModel ) => {
    const execute: ITaskUseCase["UpdateTaskCheckedStatusUseCase"] = async ( userID, checked ) => {

        try {
            const allTasks = await TaskModel.getAllTasks(userID)
            const taskUpdated = { checked }
    
            allTasks.forEach( async taskDoc  => await TaskModel.updateTask(userID, taskDoc.id, taskUpdated) )
        }
    
        catch ( error: any ) {
            throw new Error(error)
        }

    }

    return execute
}