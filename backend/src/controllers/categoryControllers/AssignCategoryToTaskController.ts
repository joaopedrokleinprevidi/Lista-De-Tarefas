import { Request, Response } from "express"
import { IAssignCategoryToTaskUseCase } from "../../@types"

export const AssignCategoryToTaskController = ( AssignCategoryToTaskUseCase: IAssignCategoryToTaskUseCase ) => {
    
    const execute = async ( request: Request, response: Response ) => {
        
        const { userID, categoryID, taskID } = request.body
        
        await AssignCategoryToTaskUseCase(userID, categoryID, taskID)

        response.status(200).json({ message: "Category sucessfully added to category." })
    }

    return execute
}