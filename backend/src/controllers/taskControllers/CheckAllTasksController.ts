import { Request, Response } from "express"
import { ITaskUseCase } from "../../@types"

export const CheckAllTasksController = ( TaskUseCaseModule: ITaskUseCase ) => {
        
    const execute = async ( request: Request, response: Response ) => {
        try {
            const { userID } = request.body
            const tasks = await TaskUseCaseModule.UpdateTaskCheckedStatusUseCase(userID, true)
    
            response.status(200).json(tasks)
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }
    }

    return execute

}