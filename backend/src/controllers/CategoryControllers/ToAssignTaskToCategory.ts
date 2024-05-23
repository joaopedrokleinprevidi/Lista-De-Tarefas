import { Request, Response } from 'express'
import { ICategoryUseCase } from '../../@types';

export const ToAssignTaskToCategoryController = ( CategoryUseCase: ICategoryUseCase ) => {
    
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { userID, categoryID, taskID } = request.body;
            await CategoryUseCase.ToAssignTaskToCategory(userID, categoryID, taskID)

            response.status(200).json({ message: "Category sucessfully added to category." })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }

    }

    return execute

}