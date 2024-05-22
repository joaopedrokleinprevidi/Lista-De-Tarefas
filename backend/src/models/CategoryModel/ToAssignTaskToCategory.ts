import { ICategoryModel } from "../../@types"
import { getCategory } from "./GetCategory"
import { updateCategory } from "./UpdateCategory"

export const toAssignTaskToCategory: ICategoryModel["toAssignTaskToCategory"] = async ( userID, categoryID, taskID ) => {
   
    try {
        const category = await getCategory(userID, categoryID)

        const assignTask = category.tasks ? [...category.tasks, taskID] : [ taskID];

        await updateCategory(userID, categoryID, assignTask)
    }

    catch ( error: any ) {
        throw new Error(error)
    }

}