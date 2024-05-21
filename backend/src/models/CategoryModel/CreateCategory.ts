import { database } from "../../config/firebaseAccountService"
import { ICategoryModel } from "../../@types"

export const createCategory: ICategoryModel["createCategory"] = async ( userID, category ) => {

    try {
        await database.collection("Usuarios").doc(userID).collection("Categorias").add(category)
    }

    catch ( error: any ) {
        throw new Error(error)
    }

}