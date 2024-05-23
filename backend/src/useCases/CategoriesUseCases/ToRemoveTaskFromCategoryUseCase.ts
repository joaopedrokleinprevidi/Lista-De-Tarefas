import { ICategoryModel, ICategoryUseCase } from "../../@types"

export const toRemoveTaskFromCategory = ( CategoryModel: ICategoryModel ) => {
   
    const execute: ICategoryUseCase["ToRemoveTaskFromCategory"] = async (userID, categoryID, taskID) => {

        try {
            const category = await CategoryModel.getCategory(userID, categoryID)
    
            const removeTaskFromCategory = category.tasks?.filter(id => id !== taskID )
            console.log(removeTaskFromCategory)
    
            await CategoryModel.updateCategory(userID, categoryID, {removeTaskFromCategory})
        }
    
        catch ( error: any ) {
            throw new Error(error)
        }

    }

    return execute;

}