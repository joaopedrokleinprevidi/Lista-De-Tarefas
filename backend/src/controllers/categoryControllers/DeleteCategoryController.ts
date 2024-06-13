import { Request, Response } from "express"
import { ICategoryModel } from "../../@types"

export const DeleteCategoryController = ( CategoryModel: ICategoryModel ) => {

    const execute = async ( request: Request, response: Response ) => {
    
        const { userID, categoryID } = request.body

        await CategoryModel.deleteCategory(userID, categoryID)

        response.status(200).json({ message: "Category deleted successfully." })
    }
    
    return execute
}