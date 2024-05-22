import { Request, Response } from 'express'
import { ICategoryModel } from '../../@types'

export const ToAssignTaskToCategoryController = ( CategoryModel: ICategoryModel) => {
    
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { userID, categoryID, taskID } = request.body;
            await CategoryModel.toAssignTaskToCategory(userID, categoryID, taskID)

            response.status(200).json({ message: "Task sucessfully added to category." })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }

    }

    return execute

}