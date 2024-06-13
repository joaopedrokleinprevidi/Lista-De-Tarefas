import { Request, Response } from "express"
import { IUpdateTaskCheckedStatusUseCase } from "../../@types"

export const UncheckAllTasksController = ( UpdateTaskCheckedStatusUseCase: IUpdateTaskCheckedStatusUseCase ) => {
        
    const execute = async ( request: Request, response: Response ) => {
        
        const { userID } = request.body
        const tasks = await UpdateTaskCheckedStatusUseCase(userID, false)

        response.status(200).json(tasks)
    }

    return execute
}