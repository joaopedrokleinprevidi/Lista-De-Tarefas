import * as CategoryModel from "../../models/categoryModel"
import * as CategoriesControllers from "../../controllers/categoryControllers"

import {
    AssignCategoryToTaskUseCase,
    RemoveTaskFromCategoryUseCase
} from "../useCases/CategoriesUseCases"

export const CreateCategoryController = CategoriesControllers.CreateCategoryController(CategoryModel)
export const DeleteCategoryController = CategoriesControllers.DeleteCategoryController(CategoryModel)
export const GetCategoryController = CategoriesControllers.GetCategoryController(CategoryModel)
export const GetAllCategoriesController = CategoriesControllers.GetAllCategoriesController(CategoryModel)
export const AssignCategoryToTaskController = CategoriesControllers.AssignCategoryToTaskController(AssignCategoryToTaskUseCase)
export const RemoveTaskFromCategoryController = CategoriesControllers.RemoveTaskFromCategoryController(RemoveTaskFromCategoryUseCase)
export const UpdateCategoryController = CategoriesControllers.UpdateCategoryController(CategoryModel)