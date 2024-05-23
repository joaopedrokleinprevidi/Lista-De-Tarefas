import { ICategoryModel, ICategoryUseCase } from "../../@types"

export const toAssignTaskToCategory = ( CategoryModel: ICategoryModel ) => {
   
    const execute: ICategoryUseCase["ToAssignTaskToCategory"] = async ( userID, categoryID, taskID ) => {

        try {
            const category = await CategoryModel.getCategory(userID, categoryID)
    
            const tasks = category.tasks ? [...category.tasks, taskID] : [ taskID ];
    
            await CategoryModel.updateCategory(userID, categoryID, {tasks})
        }
    
        catch ( error: any ) {
            throw new Error(error)
        }

    }

    return execute;

}