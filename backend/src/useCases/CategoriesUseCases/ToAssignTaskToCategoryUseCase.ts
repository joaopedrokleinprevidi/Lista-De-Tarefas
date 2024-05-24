import { ICategoryModel, IToAssignTaskToCategoryUseCase } from "../../@types"

export const ToAssignTaskToCategoryUseCase = ( CategoryModel: ICategoryModel ) => {
   
    const execute: IToAssignTaskToCategoryUseCase = async ( userID, categoryID, taskID ) => {

        try {
            const category = await CategoryModel.getCategory(userID, categoryID)
            const taskExists = category.tasks.includes(taskID)

            if( taskExists ) throw new Error("Task já existe!") 

            category.tasks.push(taskID)

            await CategoryModel.updateCategory(userID, categoryID, { tasks: category.tasks })   
        }
    
        catch ( error: any ) {
            throw new Error(error)
        }
    }

    return execute
}