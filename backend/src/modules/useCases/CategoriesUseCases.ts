import CategoriesUseCase from '../../useCases/CategoriesUseCases/'
import CategoriesModel from '../../models/CategoryModel/'

const ToAssignTaskToCategory = CategoriesUseCase.toAssignTaskToCategory(CategoriesModel)
const ToRemoveTaskFromCategory = CategoriesUseCase.toRemoveTaskFromCategory(CategoriesModel)

const CategoryUseCase = {
    ToAssignTaskToCategory,
    ToRemoveTaskFromCategory
}

export default CategoryUseCase