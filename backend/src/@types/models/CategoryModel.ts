import { ICategoryCreate, ICategoryDto, ICategoryUpdate } from "../domain"

export interface ICategoryModel {
    createCategory: ( userID: string, category: ICategoryCreate ) => Promise<ICategoryDto>
    deleteCategory: ( userID: string, categoryID: string ) => Promise<void>
    updateCategory: ( userID: string, categoryID: string, categoryUpdate: Partial<ICategoryUpdate> ) => Promise<void>
    getAllCategories: ( userID: string ) => Promise<ICategoryDto[]>
    getCategory: ( userID: string, categoryID: string ) => Promise<ICategoryDto>
    filterCategory: ( userID: string, fieldPath: keyof ICategoryDto, fieldValue: string ) => Promise<ICategoryDto[]> 
}