import { ICategoryModel, IRemoveTaskFromCategoryUseCase } from "../../@types"

export const RemoveTaskFromCategoryUseCase = ( CategoryModel: ICategoryModel ) => {
   
    const execute: IRemoveTaskFromCategoryUseCase = async ( userID, categoryID, taskID ) => {

        const categoryDto = await CategoryModel.getCategory(userID, categoryID)
        const tasksIDsWithoutThisTask = categoryDto.tasksIDs.filter( id => id !== taskID )

        await CategoryModel.updateCategory(userID, categoryID, { tasksIDs: tasksIDsWithoutThisTask })
    }

    return execute
}