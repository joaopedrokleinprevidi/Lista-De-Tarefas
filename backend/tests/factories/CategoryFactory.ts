import { ICategory } from "../../src/@types"
import { deleteCategory, getAllCategories } from "../../src/models/categoryModel"
import { getUserByEmail } from "../../src/services/firebaseAdminService"
import { userCreateDataFactory } from "./UserFactory"

export const categoryCreateDataFactory: Omit<ICategory, "id"> = {
    name: "categoriaTeste",
    color: "white",
    tasks: []
}

export const deleteAllCategoriesFactory = async () => {
    const user = await getUserByEmail(userCreateDataFactory.email)
    const allCategories = await getAllCategories(user.uid)

    const deleteAllCategories = allCategories.map( category => deleteCategory(user.uid, category.id) )

    await Promise.all(deleteAllCategories)
}