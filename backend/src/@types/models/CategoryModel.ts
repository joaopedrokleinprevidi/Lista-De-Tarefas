import { ICategory } from "../domain"

export interface ICategoryModel {
    createCategory: ( userID: string, category: Omit<ICategory, "id"> ) => Promise<void>
    deleteCategory: ( userID: string, categoryID: string ) => Promise<void>
    updateCategory: ( userID: string, categoryID: string, categoryUpdate: any ) => Promise<void>
    getAllCategories: ( userID: string ) => Promise<ICategory[]>

    getCategory: ( userID: string, categoryID: string ) => Promise<ICategory>
    toAssignCategoryToTask: ( userID: string, categoryID: string, taskID: string ) => Promise<void>
    toRemoveCategoryFromTask: ( userID: string, categoryID: string, taskID: string ) => Promise<void>
}