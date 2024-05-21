import { database } from "../../config/firebaseAccountService"
import { ICategory, ICategoryModel } from "../../@types"

export const getCategory: ICategoryModel["getCategory"] = async ( userID, categoryID ) => {

    try {
        const categoryDoc = await database.collection("Usuarios").doc(userID).collection("Categorias").doc(categoryID).get()
        
        const categoryData = categoryDoc.data()

        const category: ICategory = {
            id: categoryID,
            name: categoryData?.name,
            color: categoryData?.color,
            tasks: categoryData?.tasks
        }

            return category
    }

    catch ( error: any ) {
        throw new Error(error)
    }

}