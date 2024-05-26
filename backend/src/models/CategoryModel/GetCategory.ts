import { database } from "../../config/firebaseAccountService"
import { ICategoryDto, ICategoryModel } from "../../@types"

export const getCategory: ICategoryModel["getCategory"] = async ( userID, categoryID ) => {

    try {
        const categoryDoc = await database.collection("Usuarios").doc(userID).collection("Categorias").doc(categoryID).get()

        return { id: categoryDoc.id, ...categoryDoc.data() } as ICategoryDto
    }

    catch ( error: any ) {
        throw new Error(error)
    }
}