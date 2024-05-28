import { Request, Response } from "express"
import { ICategoryModel } from "../../@types"

export const GetAllCategoriesController = ( CategoryModel: ICategoryModel ) => {
    
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { userID } = request.body
            const allCategories = await CategoryModel.getAllCategories(userID)

            response.status(200).json(allCategories)
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }
    }

    return execute
}