import { database } from "../../config/firebaseAccountService"
import { ICategory, ICategoryModel } from "../../@types"

export const createCategory: ICategoryModel["createCategory"] = async ( userID, category ) => {

    try {
        const newCategory = await database.collection("Usuarios").doc(userID).collection("Categorias").add(category)
        const newCategoryDoc = await newCategory.get()

        return { id: newCategoryDoc.id, ...newCategoryDoc.data() } as ICategory
    }

    catch ( error: any ) {
        throw new Error(error)
    }
}