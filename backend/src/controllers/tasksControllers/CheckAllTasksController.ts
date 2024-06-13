import { Request, Response } from "express"
import { IUpdateTaskCheckedStatusUseCase } from "../../@types"

export const CheckAllTasksController = ( UpdateTaskCheckedStatusUseCase: IUpdateTaskCheckedStatusUseCase ) => {
        
    const execute = async ( request: Request, response: Response ) => {
        
        const { userID } = request.body
        const tasks = await UpdateTaskCheckedStatusUseCase(userID, true)

        response.status(200).json(tasks)
    }

    return execute
}