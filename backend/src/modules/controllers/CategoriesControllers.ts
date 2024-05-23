import CategoriesControllers from "../../controllers/CategoryControllers"
import CategoriesModel from '../../models/CategoryModel/index'
import CategoryUseCase from '../useCases/CategoriesUseCases'

export const CreateCategoryController = CategoriesControllers.CreateCategoryController(CategoriesModel)
export const DeleteCategoryController = CategoriesControllers.DeleteCategoryController(CategoriesModel)
export const GetAllCategoriesController = CategoriesControllers.GetAllCategoriesController(CategoriesModel)
export const GetCategoryController = CategoriesControllers.GetCategoryController(CategoriesModel)
export const ToAssignTaskToCategoryController = CategoriesControllers.ToAssignTaskToCategoryController(CategoryUseCase)
export const ToRemoveTaskFromCategoryController = CategoriesControllers.ToRemoveTaskFromCategoryController(CategoryUseCase)
export const updateCategory = CategoriesControllers.UpdateCategory(CategoriesModel)