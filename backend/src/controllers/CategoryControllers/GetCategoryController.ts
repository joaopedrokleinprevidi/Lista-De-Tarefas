import { Request, Response } from 'express'
import { ICategoryModel } from '../../@types'

export const GetCategoryController = ( CategoryModel: ICategoryModel) => {
    
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { userID, categoryID } = request.body;
            const category = await CategoryModel.getCategory(userID, categoryID)

            response.status(200).json(category)
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }

    }

    return execute

}