import * as CategoryModel from "../../models/categoryModel"
import * as CategoriesUseCases from "../../useCases/categoriesUseCases"

export const AssignCategoryToTaskUseCase = CategoriesUseCases.AssignCategoryToTaskUseCase(CategoryModel)
export const RemoveTaskFromCategoryUseCase = CategoriesUseCases.RemoveTaskFromCategoryUseCase(CategoryModel)