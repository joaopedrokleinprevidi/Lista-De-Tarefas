import { Request, Response } from "express"
import { IUpdateTaskCheckedStatusUseCase } from "../../useCases"

export const UncheckAllTasksController = ( UpdateTaskCheckedStatusUseCase: IUpdateTaskCheckedStatusUseCase ) => {
        
    const execute = async ( request: Request, response: Response ) => {
        try {
            const { userID } = request.body
            const tasks = await UpdateTaskCheckedStatusUseCase(userID, false)
    
            response.status(200).json(tasks)
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }
    }

    return execute

}