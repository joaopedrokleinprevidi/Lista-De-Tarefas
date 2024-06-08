import { IUser } from "../../../src/@types/domain/User"
import { createCategory, filterCategory } from "../../../src/models/categoryModel"
import { categoryCreateDataFactory, deleteAllCategoriesFactory } from "../../factories/CategoryFactory"
import { deleteUserFactory, userFactory } from "../../factories/UserFactory"

const createCategoriesFactory = async ( user: IUser ) => {
    await Promise.all([
        createCategory(user.uid, { ...categoryCreateDataFactory, color: "red" }),
        createCategory(user.uid, { ...categoryCreateDataFactory, color: "red" }),
        createCategory(user.uid, { ...categoryCreateDataFactory, color: "black" })
    ])
}

describe("CategoryModel > FilterCategory", () => {
    let user: IUser
    
    beforeAll( async () => {
        user = await userFactory()
        await createCategoriesFactory(user)
    })
    
    afterAll( async () => {
        await deleteAllCategoriesFactory()
        await deleteUserFactory()
    })
            
    it("Must filter the category successfully", async () => {
        const filteredCategories = await filterCategory(user.uid, "color", "red")

        expect(filteredCategories.length).toBe(2)
        expect(filteredCategories[0].color).toBe("red")
        expect(filteredCategories[1].color).toBe("red")
    })

    it("Must return an empty array if no category satisfies the filter", async () => {
        const filteredCategories = await filterCategory(user.uid, "color", "white")

        expect(filteredCategories.length).toBe(0)
    })
})