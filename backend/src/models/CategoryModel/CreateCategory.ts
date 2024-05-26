import { database } from "../../config/firebaseAccountService"
import { ICategoryModel } from "../../@types"
import { retrieveCategoryData } from "./RetrieveCategoryData"

export const createCategory: ICategoryModel["createCategory"] = async ( userID, categoryCreate ) => {
    const categoryDto = {
        name: categoryCreate.name,
        color: categoryCreate.color,
        tasksIDs: []
    }
    
    const newCategory = await database.collection("Usuarios").doc(userID).collection("Categorias").add(categoryDto)
    const newCategoryDoc = await newCategory.get()

    return await retrieveCategoryData(newCategoryDoc)
}