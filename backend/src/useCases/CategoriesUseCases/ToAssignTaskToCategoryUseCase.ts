import { ICategoryModel, IToAssignTaskToCategoryUseCase } from "../../@types"

export const ToAssignTaskToCategoryUseCase = ( CategoryModel: ICategoryModel ) => {
   
    const execute: IToAssignTaskToCategoryUseCase = async ( userID, categoryID, taskID ) => {

        try {
            const category = await CategoryModel.getCategory(userID, categoryID)
            const taskExists = category.tasksIDs.includes(taskID)

            if( taskExists ) throw new Error("Task já existe!") 

            category.tasksIDs.push(taskID)

            await CategoryModel.updateCategory(userID, categoryID, { tasksIDs: category.tasksIDs })   
        }
    
        catch ( error: any ) {
            throw new Error(error)
        }
    }

    return execute
}