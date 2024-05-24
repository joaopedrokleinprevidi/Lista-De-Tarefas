import * as CategoryModel from "../../models/categoryModel"
import * as CategoriesControllers from "../../controllers/categoryControllers"

import {
    ToAssignTaskToCategoryUseCase,
    ToRemoveTaskFromCategoryUseCase
} from "../useCases/CategoriesUseCases"

export const CreateCategoryController = CategoriesControllers.CreateCategoryController(CategoryModel)
export const DeleteCategoryController = CategoriesControllers.DeleteCategoryController(CategoryModel)
export const GetAllCategoriesController = CategoriesControllers.GetAllCategoriesController(CategoryModel)
export const GetCategoryController = CategoriesControllers.GetCategoryController(CategoryModel)
export const ToAssignTaskToCategoryController = CategoriesControllers.ToAssignTaskToCategoryController(ToAssignTaskToCategoryUseCase)
export const ToRemoveTaskFromCategoryController = CategoriesControllers.ToRemoveTaskFromCategoryController(ToRemoveTaskFromCategoryUseCase)
export const updateCategory = CategoriesControllers.UpdateCategoryController(CategoryModel)