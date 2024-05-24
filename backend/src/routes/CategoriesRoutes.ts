import { Router } from "express"
import { AuthUserMiddleware } from "../modules/middlewares/AuthUserMiddleware"

import {
    CreateCategoryController,
    DeleteCategoryController,
    GetAllCategoriesController,
    ToAssignTaskToCategoryController,
    ToRemoveTaskFromCategoryController,
    GetCategoryController,
    updateCategory
} from "../modules/controllers/CategoriesControllers"

const categoriesRoutes = Router() 

categoriesRoutes.post("/categories/create", AuthUserMiddleware, CreateCategoryController)

categoriesRoutes.delete("/categories/delete", AuthUserMiddleware, DeleteCategoryController)

categoriesRoutes.get("/categories/getAll", AuthUserMiddleware, GetAllCategoriesController)

categoriesRoutes.get("/categories/get", AuthUserMiddleware, GetCategoryController)

categoriesRoutes.put("/categories/assignTaskToCategory", AuthUserMiddleware, ToAssignTaskToCategoryController)

categoriesRoutes.put("/categories/removeTaskFromCategory", AuthUserMiddleware, ToRemoveTaskFromCategoryController)

categoriesRoutes.put("/categories/update", AuthUserMiddleware, updateCategory)

export default categoriesRoutes