import { Request, Response } from 'express'
import { ICategoryModel } from '../../@types'

export const toRemoveTaskFromCategoryController = ( CategoryModel: ICategoryModel) => {
    
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { userID, categoryID, taskID } = request.body;
            await CategoryModel.toRemoveTaskFromCategory(userID, categoryID, taskID)

            response.status(200).json({ message: "Task successfully removed from category." })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }

    }

    return execute

}