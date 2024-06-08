import { ICategoryModel, ICreateNewCategoryUseCase } from "../../@types"
import { UnhandledError } from "../../errors/ApplicationError"

export const CreateNewCategoryUseCase = ( CategoryModel: ICategoryModel ) => {
   
    const execute: ICreateNewCategoryUseCase = async ( userID, categoryCreate ) => {

        const categoryAlredyExists = await CategoryModel.filterCategory(userID, "name", categoryCreate.name)

        if( categoryAlredyExists ) throw new UnhandledError("This category name already exists.") 

        await CategoryModel.createCategory(userID, categoryCreate)
    }

    return execute
}