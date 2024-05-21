import { database } from "../../config/firebaseAccountService"
import { ICategoryModel, ICategory } from "../../@types"

export const updateCategory: ICategoryModel["updateCategory"] = async ( userID, categoryID, categoryUpdate ) => {
   
    try {
        await database.collection("Usuarios").doc(userID).collection("Categorias").doc(categoryID).update(categoryUpdate)
    }

    catch ( error: any ) {
        throw new Error(error)
    }

}