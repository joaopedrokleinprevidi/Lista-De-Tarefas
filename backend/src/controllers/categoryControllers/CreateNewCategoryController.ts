import { Request, Response } from "express"
import { ICreateNewCategoryUseCase } from "../../@types"

export const CreateNewCategoryController = ( CreateNewCategoryUseCase: ICreateNewCategoryUseCase ) => {
    
    const execute = async ( request: Request, response: Response ) => {

        const { userID, category } = request.body

        await CreateNewCategoryUseCase(userID, category)

        response.status(201).json({ message: "Category created successfully." })
    }

    return execute
}