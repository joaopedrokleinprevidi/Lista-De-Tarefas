import { createCategory, getAllCategories } from "../../../../src/models/categoryModel"
import { categoryCreateDataFactory, deleteAllCategoriesFactory } from "../../../factories/CategoryFactory"
import { deleteUserFactory, userFactory } from "../../../factories/UserFactory"
import { IUser } from "../../../../src/@types/domain/User"

const createCategoriesFactory = async ( user: IUser ) => {

    await Promise.all([
        createCategory(user.uid, { ...categoryCreateDataFactory, name: categoryCreateDataFactory.name + "1" }),
        createCategory(user.uid, { ...categoryCreateDataFactory, name: categoryCreateDataFactory.name + "2" })
    ])
}

describe("CategoryModel > GetAllCategories", () => {
    let user: IUser
    
    beforeAll( async () => user = await userFactory() )

    afterAll( async() => await deleteUserFactory() )

    it("Must get all categories successfully", async () => {
        
        await createCategoriesFactory(user)
        
        const allCategories = await getAllCategories(user.uid)
        
        expect(allCategories.length).toBe(2)

        await deleteAllCategoriesFactory()
    })

    it("Must return an empty array if there are no categories", async () => {
        const allCategories = await getAllCategories(user.uid)

        expect(allCategories).toEqual([])
    })
})