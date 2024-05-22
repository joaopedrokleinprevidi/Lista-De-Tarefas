import * as CategoriesControllersModule from "../../controllers/CategoryControllers"
import * as CategoriesModel from '../../models/CategoryModel'

export const CreateCategoryController = CategoriesControllersModule.CreateCategoryController(CategoriesModel)
export const DeleteCategoryController = CategoriesControllersModule.DeleteCategoryController(CategoriesModel)
export const GetAllCategoriesController = CategoriesControllersModule.GetAllCategoriesController(CategoriesModel)
export const GetCategoryController = CategoriesControllersModule.GetCategoryController(CategoriesModel)
export const ToAssignTaskToCategoryController = CategoriesControllersModule.ToAssignTaskToCategoryController(CategoriesModel)
export const ToRemoveTaskFromCategoryController = CategoriesControllersModule.ToRemoveTaskFromCategoryController(CategoriesModel)