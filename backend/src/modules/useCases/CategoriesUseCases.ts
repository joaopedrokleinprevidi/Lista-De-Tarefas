import * as CategoryModel from "../../models/categoryModel"
import * as CategoriesUseCases from "../../useCases/categoriesUseCases"

export const ToAssignTaskToCategoryUseCase = CategoriesUseCases.ToAssignTaskToCategoryUseCase(CategoryModel)
export const ToRemoveTaskFromCategoryUseCase = CategoriesUseCases.ToRemoveTaskFromCategoryUseCase(CategoryModel)