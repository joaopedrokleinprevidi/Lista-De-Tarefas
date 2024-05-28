import { database } from "../../config/firebaseAccountService"
import { ICategoryModel } from "../../@types"

export const deleteCategory: ICategoryModel["deleteCategory"] = async ( userID, categoryID ) => {

    try {
        await database.collection("Usuarios").doc(userID).collection("Categorias").doc(categoryID).delete()
    }
    
    catch ( error: any ) {
        throw new Error(error)
    }
}