import { Request, Response } from "express"
import { IAssignCategoryToTaskUseCase } from "../../@types"

export const AssignCategoryToTaskController = ( AssignCategoryToTaskUseCase: IAssignCategoryToTaskUseCase ) => {
    
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { userID, categoryID, taskID } = request.body
            
            await AssignCategoryToTaskUseCase(userID, categoryID, taskID)

            response.status(200).json({ message: "Category sucessfully added to category." })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }
    }

    return execute
}