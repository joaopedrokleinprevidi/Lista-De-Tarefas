import { Request, Response } from 'express'
import { ICategoryModel } from '../../@types'

export const UpdateCategory = ( CategoryModel: ICategoryModel) => {
    
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { userID, categoryID, categoryUpdate } = request.body;
            await CategoryModel.updateCategory(userID, categoryID, categoryUpdate)

            response.status(200).json({ message: "Category successfully removed from category." })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }

    }

    return execute

}