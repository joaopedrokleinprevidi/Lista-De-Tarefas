import { database } from "../../config/firebaseAccountService"
import { ICategoryModel } from "../../@types"
import { retrieveCategoryData } from "./RetrieveCategoryData"

export const getAllCategories: ICategoryModel["getAllCategories"] = async ( userID ) => {
    
    const categoriesSnapshot = await database.collection("Usuarios").doc(userID).collection("Categorias").get()
    const retrieveCategoriesData = categoriesSnapshot.docs.map( categoryDoc => retrieveCategoryData(categoryDoc) )

    return await Promise.all(retrieveCategoriesData)
}