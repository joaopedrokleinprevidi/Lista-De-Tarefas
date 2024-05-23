import express from 'express'
const categoriesRoutes = express.Router() 

import { AuthMiddleware } from '../middlewares/authMiddleware'
import { CreateCategoryController, DeleteCategoryController, GetAllCategoriesController, ToAssignTaskToCategoryController, ToRemoveTaskFromCategoryController, GetCategoryController, updateCategory } from '../modules/controllers/CategoriesControllers'

categoriesRoutes.post("/categories/create", AuthMiddleware.VerifyUser, CreateCategoryController)

categoriesRoutes.delete("/categories/delete", AuthMiddleware.VerifyUser, DeleteCategoryController)

categoriesRoutes.get("/categories/getAll", AuthMiddleware.VerifyUser, GetAllCategoriesController)

categoriesRoutes.get("/categories/get", AuthMiddleware.VerifyUser, GetCategoryController)

categoriesRoutes.put("/categories/assignTaskToCategory", AuthMiddleware.VerifyUser, ToAssignTaskToCategoryController)

categoriesRoutes.put("/categories/removeTaskFromCategory", AuthMiddleware.VerifyUser, ToRemoveTaskFromCategoryController)

categoriesRoutes.put("/categories/update", AuthMiddleware.VerifyUser, updateCategory)

export default categoriesRoutes