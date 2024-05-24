import { Request, Response } from "express"
import { ICategoryModel } from "../../@types"

export const DeleteCategoryController = ( CategoryModel: ICategoryModel ) => {

    const execute = async ( request: Request, response: Response ) => {
    
        try {
            const { userID, categoryID } = request.body

            await CategoryModel.deleteCategory(userID, categoryID)

            response.status(200).json({ message: "Category deleted successfully." })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }
    }
    
    return execute
}