import { Request, Response } from "express"
import { ICreateNewCategoryUseCase } from "../../@types"

export const CreateNewCategoryController = ( CreateNewCategoryUseCase: ICreateNewCategoryUseCase ) => {
    
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { userID, category } = request.body

            await CreateNewCategoryUseCase(userID, category)

            response.status(201).json({ message: "Category created successfully." })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }
    }

    return execute
}