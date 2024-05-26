import { database } from "../../config/firebaseAccountService"
import { ICategoryDto, ICategoryModel, ICategoryUpdate } from "../../@types"

export const createCategory: ICategoryModel["createCategory"] = async ( userID, categoryCreate ) => {

    try {
        const category: ICategoryUpdate = {
            name: categoryCreate.name,
            color: categoryCreate.color,
            tasksIDs: []
        }

        const newCategory = await database.collection("Usuarios").doc(userID).collection("Categorias").add(category)
        const newCategoryDoc = await newCategory.get()

        return {
            id: newCategoryDoc.id,
            ...newCategoryDoc.data()
        } as ICategoryDto
    }

    catch ( error: any ) {
        throw new Error(error)
    }
}