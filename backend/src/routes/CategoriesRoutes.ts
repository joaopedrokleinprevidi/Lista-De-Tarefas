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

categoriesRoutes.post("/create", AuthUserMiddleware, CreateNewCategoryController)

categoriesRoutes.delete("/delete", AuthUserMiddleware, DeleteCategoryController)

categoriesRoutes.get("/getAll", AuthUserMiddleware, GetAllCategoriesController)

categoriesRoutes.get("/get", AuthUserMiddleware, GetCategoryController)

categoriesRoutes.put("/assignTaskToCategory", AuthUserMiddleware, AssignCategoryToTaskController)

categoriesRoutes.put("/removeTaskFromCategory", AuthUserMiddleware, RemoveTaskFromCategoryController)

categoriesRoutes.put("/update", AuthUserMiddleware, UpdateCategoryController)

export default categoriesRoutes