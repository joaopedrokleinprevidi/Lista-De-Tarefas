import { database } from "../../config/firebaseAccountService"
import { ICategoryModel } from "../../@types"

export const updateCategory: ICategoryModel["updateCategory"] = async ( userID, categoryID, categoryUpdate ) => {
   
    await database.collection("Usuarios").doc(userID).collection("Categorias").doc(categoryID).update(categoryUpdate)
}