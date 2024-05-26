import { ICategoryModel, IToRemoveTaskFromCategoryUseCase } from "../../@types"

export const ToRemoveTaskFromCategoryUseCase = ( CategoryModel: ICategoryModel ) => {
   
    const execute: IToRemoveTaskFromCategoryUseCase = async ( userID, categoryID, taskID ) => {

        try {
            const category = await CategoryModel.getCategory(userID, categoryID)
            const removeTaskFromCategory = category.tasksIDs.filter( id => id !== taskID )
    
            await CategoryModel.updateCategory(userID, categoryID, { tasksIDs: removeTaskFromCategory })
        }
    
        catch ( error: any ) {
            throw new Error(error)
        }
    }

    return execute
}