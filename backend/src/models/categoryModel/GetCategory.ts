import { database } from "../../config/firebaseAccountService"
import { ICategoryModel } from "../../@types"
import { retrieveCategoryData } from "./RetrieveCategoryData"

export const getCategory: ICategoryModel["getCategory"] = async ( userID, categoryID ) => {

    const categoryDoc = await database.collection("Usuarios").doc(userID).collection("Categorias").doc(categoryID).get()

    return await retrieveCategoryData(categoryDoc)
}