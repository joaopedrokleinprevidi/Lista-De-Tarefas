import { createCategory } from "../../../src/models/categoryModel"
import { categoryCreateDataFactory, deleteAllCategoriesFactory } from "../../factories/CategoryFactory"
import { deleteUserFactory, userFactory } from "../../factories/UserFactory"

describe("CategoryModel > CreateCategory", () => {
    
    afterEach( async () => {
        await deleteAllCategoriesFactory()
        await deleteUserFactory()
    })

    it("Must create a category successfully", async () => {
        const user = await userFactory()
        const newCategory = await createCategory(user.uid, categoryCreateDataFactory)

        expect(newCategory).toMatchObject({
            id: expect.any(String),
            name: categoryCreateDataFactory.name,
            color: categoryCreateDataFactory.color,
            tasksIDs: []
        })
    })
})