import { Request, Response } from "express"
import { ITaskModel } from "../../@types"

export const UpdateTaskController = ( TaskModel: ITaskModel ) => {

    const execute = async ( request: Request, response: Response ) => {
        
        try {
            const { userID, taskID, taskUpdated } = request.body
    
            await TaskModel.updateTask(userID, taskID, taskUpdated)

            response.status(200).json({ message: "Task updated successfully." })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }
    }

    return execute
}