import { createCategory } from './CreateCategory'
import { deleteCategory } from './DeleteCategory'
import { getAllCategories } from './GetAllCategories'
import { getCategory } from './GetCategory'
import { updateCategory } from './UpdateCategory'

const CategoriesModel = {
    createCategory,
    deleteCategory,
    updateCategory,
    getAllCategories,
    getCategory
}

export default CategoriesModel