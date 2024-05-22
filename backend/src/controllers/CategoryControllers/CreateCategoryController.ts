import { Request, Response } from 'express'
import { ICategoryModel } from '../../@types'

export const CreateCategoryController = ( CategoryModel: ICategoryModel ) => {
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { userID, category } = request.body

            await CategoryModel.createCategory(userID, category)

            response.status(201).json({ message: 'Category created successfully.' })
        }
    
        catch ( error: any ) {
            response.status(500).json(error)
        }

    }

    return execute
}