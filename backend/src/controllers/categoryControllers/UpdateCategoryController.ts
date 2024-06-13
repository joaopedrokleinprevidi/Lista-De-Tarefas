import { Request, Response } from "express"
import { ICategoryModel } from "../../@types"

export const UpdateCategoryController = ( CategoryModel: ICategoryModel ) => {
    
    const execute = async ( request: Request, response: Response ) => {

        const { userID, categoryID, categoryUpdate } = request.body
        
        await CategoryModel.updateCategory(userID, categoryID, categoryUpdate)

        response.status(200).json({ message: "Category updated successfully." })
    }

    return execute
}