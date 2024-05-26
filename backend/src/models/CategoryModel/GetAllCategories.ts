import { database } from "../../config/firebaseAccountService"
import { ICategoryDto, ICategoryModel } from "../../@types"

export const getAllCategories: ICategoryModel["getAllCategories"] = async ( userID ) => {

    try {
        const snapshot = await database.collection("Usuarios").doc(userID).collection("Categorias").get()

        const categories = snapshot.docs.map( doc => ({
            id: doc.id,
            ...doc.data(),
        }))

        return categories as ICategoryDto[]
    }

    catch ( error: any ) {
        throw new Error(error)
    }
}