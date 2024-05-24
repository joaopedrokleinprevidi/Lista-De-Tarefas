import { Request, Response } from "express"
import { IToRemoveTaskFromCategoryUseCase } from "../../@types"

export const ToRemoveTaskFromCategoryController = ( ToRemoveTaskFromCategory: IToRemoveTaskFromCategoryUseCase ) => {
    
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { userID, categoryID, taskID } = request.body
            
            await ToRemoveTaskFromCategory(userID, categoryID, taskID)

            response.status(200).json({ message: "Task successfully removed from category." })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }
    }

    return execute
}