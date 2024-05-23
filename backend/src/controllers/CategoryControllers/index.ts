import { CreateCategoryController } from './CreateCategoryController'
import { DeleteCategoryController } from './DeleteCategoryController'
import { GetAllCategoriesController } from './GetAllCategoriesController'
import { GetCategoryController } from './GetCategoryController'
import { ToAssignTaskToCategoryController } from './ToAssignTaskToCategory'
import { ToRemoveTaskFromCategoryController } from './ToRemoveTaskFromCategory'
import { UpdateCategory } from './UpdateCategory'

const CategoriesControllers = {
    CreateCategoryController,
    DeleteCategoryController,
    GetAllCategoriesController,
    GetCategoryController,
    ToAssignTaskToCategoryController,
    ToRemoveTaskFromCategoryController,
    UpdateCategory
}

export default CategoriesControllers