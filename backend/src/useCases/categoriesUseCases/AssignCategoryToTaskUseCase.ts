import { ICategoryModel, IAssignCategoryToTaskUseCase } from "../../@types"
import { UnhandledError } from "../../errors/ApplicationError"

export const AssignCategoryToTaskUseCase = ( CategoryModel: ICategoryModel ) => {
   
    const execute: IAssignCategoryToTaskUseCase = async ( userID, categoryID, taskID ) => {

        const categoryDto = await CategoryModel.getCategory(userID, categoryID)
        const taskExists = categoryDto.tasksIDs.includes(taskID)

        if( taskExists ) throw new UnhandledError("The category is already assigned to this task.") 

        categoryDto.tasksIDs.push(taskID)

        await CategoryModel.updateCategory(userID, categoryID, { tasksIDs: categoryDto.tasksIDs })
    }

    return execute
}