import { ICategoryModel } from "../../@types"
import { getCategory } from "./GetCategory"
import { updateCategory } from "./UpdateCategory"

export const toRemoveTaskFromCategory: ICategoryModel["toRemoveTaskFromCategory"] = async ( userID, categoryID, taskID ) => {
   
    try {
        const category = await getCategory(userID, categoryID)

        const removeCategory = category.tasks?.filter(id => id !== taskID )

        await updateCategory(userID, categoryID, removeCategory)
    }

    catch ( error: any ) {
        throw new Error(error)
    }

}