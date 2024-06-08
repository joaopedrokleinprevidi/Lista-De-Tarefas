import { Router } from "express"
import { AuthUserMiddleware } from "../modules/middlewares/UserMiddlewares"

import {
    CreateNewCategoryController,
    DeleteCategoryController,
    GetCategoryController,
    GetAllCategoriesController,
    UpdateCategoryController,
    AssignCategoryToTaskController,
    RemoveTaskFromCategoryController
} from "../modules/controllers/CategoriesControllers"

const categoriesRoutes = Router() 

categoriesRoutes.post("/categories/create", AuthUserMiddleware, CreateNewCategoryController)

categoriesRoutes.delete("/categories/delete", AuthUserMiddleware, DeleteCategoryController)

categoriesRoutes.get("/categories/getAll", AuthUserMiddleware, GetAllCategoriesController)

categoriesRoutes.get("/categories/get", AuthUserMiddleware, GetCategoryController)

categoriesRoutes.put("/categories/assignTaskToCategory", AuthUserMiddleware, AssignCategoryToTaskController)

categoriesRoutes.put("/categories/removeTaskFromCategory", AuthUserMiddleware, RemoveTaskFromCategoryController)

categoriesRoutes.put("/categories/update", AuthUserMiddleware, UpdateCategoryController)

export default categoriesRoutes