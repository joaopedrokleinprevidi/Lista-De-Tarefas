import { database } from "../../config/firebaseAccountService"
import { ICategoryModel } from "../../@types"
import { retrieveCategoryData } from "./RetrieveCategoryData"

export const filterCategory: ICategoryModel["filterCategory"] = async ( userID, fieldPath, fieldValue ) => {

    const categoriesFilteredSnapshot = await database.collection("Usuarios").doc(userID).collection("Categorias").where(fieldPath, "==", fieldValue).get()
    const categoriesFilteredData = categoriesFilteredSnapshot.docs.map( categoryDoc => retrieveCategoryData(categoryDoc) )

    return await Promise.all(categoriesFilteredData)
}