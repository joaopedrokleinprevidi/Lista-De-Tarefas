import { AuthMiddleware } from '../middlewares/authMiddleware'
import { CreateCategoryController, DeleteCategoryController, GetAllCategoriesController, ToAssignTaskToCategoryController, ToRemoveTaskFromCategoryController, GetCategoryController, updateCategory } from '../modules/controllers/CategoriesControllers'
import router from './index'

router.post("/categories/create", AuthMiddleware.VerifyUser, CreateCategoryController)

router.delete("/categories/delete", AuthMiddleware.VerifyUser, DeleteCategoryController)

router.get("/categories/getAll", AuthMiddleware.VerifyUser, GetAllCategoriesController)

router.get("/categories/get", AuthMiddleware.VerifyUser, GetCategoryController)

router.put("/categories/assignTaskToCategory", AuthMiddleware.VerifyUser, ToAssignTaskToCategoryController)

router.put("/categories/removeTaskFromCategory", AuthMiddleware.VerifyUser, ToRemoveTaskFromCategoryController)

router.put("/categories/update", AuthMiddleware.VerifyUser, updateCategory)