import { Request, Response } from "express"
import { ITaskModel } from "../../@types"

export const GetAllTasksController = ( TaskModel: ITaskModel ) => {
    
    const execute = async ( request: Request, response: Response ) => {

        const { userID } = request.body
        const allTasks = await TaskModel.getAllTasks(userID)

        response.status(200).json(allTasks)
    }

    return execute
}