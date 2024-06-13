import { Request, Response } from "express"
import { IRemoveTaskFromCategoryUseCase } from "../../@types"

export const RemoveTaskFromCategoryController = ( RemoveTaskFromCategory: IRemoveTaskFromCategoryUseCase ) => {
    
    const execute = async ( request: Request, response: Response ) => {

        const { userID, categoryID, taskID } = request.body
        
        await RemoveTaskFromCategory(userID, categoryID, taskID)

        response.status(200).json({ message: "Task successfully removed from category." })
    }

    return execute
}