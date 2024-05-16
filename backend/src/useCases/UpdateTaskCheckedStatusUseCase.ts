import { ITaskModel } from "../@types" 

export interface IUpdateTaskCheckedStatusUseCase {
    ( userID: string, checked: boolean ): Promise<void>
}

export const UpdateTaskCheckedStatusUseCase = ( TaskModel: ITaskModel ) => {
    const execute: IUpdateTaskCheckedStatusUseCase = async ( userID, checked ) => {

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