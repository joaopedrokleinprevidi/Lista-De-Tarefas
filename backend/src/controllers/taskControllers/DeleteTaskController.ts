import { Request, Response } from 'express'
import { ITaskModel } from '../../@types'

export const DeleteTaskController = ( TaskModel: ITaskModel ) => {

    const execute = async (request: Request, response: Response) => {
    
        try {
            const { userID, taskID } = request.body

            await TaskModel.deleteTask(userID, taskID)

            response.status(200).json({ message: "Task deleted successfully." })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }
    
    }
    
    return execute
    
}