import { ICategoryModel, ICategoryUseCase } from "../../@types"

export const toAssignTaskToCategory = ( CategoryModel: ICategoryModel ) => {
   
    const execute: ICategoryUseCase["ToAssignTaskToCategory"] = async ( userID, categoryID, taskID ) => {

        try {
            const category = await CategoryModel.getCategory(userID, categoryID)
    
            const taskExists = category.tasks?.filter(id => id == taskID )

            if( taskExists ){
                throw new Error("Task já existe!")
            } 

            const tasks = category.tasks ? [...category.tasks, taskID] : [ taskID ]
            await CategoryModel.updateCategory(userID, categoryID, { tasks })   

        }
    
        catch ( error: any ) {
            console.log("teste", error)
            
            throw new Error(error)
        }

    }

    return execute;

}