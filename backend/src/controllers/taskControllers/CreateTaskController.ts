import { Request, Response } from 'express'
import { ITaskModel } from '../../@types'




export const CreateTaskController = ( TaskModel: ITaskModel ) => {
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { userID, task } = request.body

            await TaskModel.createTask(userID, task)

            response.status(201).json({ message: 'Task created successfully.' })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }

    }

    return execute
}