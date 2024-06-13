import { Request, Response } from "express"
import { ICategoryModel } from "../../@types"

export const GetAllCategoriesController = ( CategoryModel: ICategoryModel ) => {
    
    const execute = async ( request: Request, response: Response ) => {

        const { userID } = request.body
        const allCategories = await CategoryModel.getAllCategories(userID)

        response.status(200).json(allCategories)
    }

    return execute
}