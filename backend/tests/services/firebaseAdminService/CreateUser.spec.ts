import { database } from "../../../src/config/firebaseAccountService"
import { EmailAlreadyExistsError } from "../../../src/errors/UserServiceError"
import { createUser } from "../../../src/services/firebaseAdminService"
import { deleteUserFactory, userCreateDataFactory } from "../../factories/UserFactory"

describe("FirebaseAdminService > CreateUser", () => {
    beforeAll( async () => await database )

    afterEach( async () => await deleteUserFactory() )
    
    it("Must create a user successfully", async () => {
        const user = await createUser(userCreateDataFactory.email, userCreateDataFactory.password)

        expect(user.email).toEqual(userCreateDataFactory.email)
    })

    it("Should return an error if the email is already in use", async () => {
        await createUser(userCreateDataFactory.email, userCreateDataFactory.password)

        const user = () => createUser(userCreateDataFactory.email, userCreateDataFactory.password)

        await expect(user).rejects.toEqual( new EmailAlreadyExistsError() )
    }) 
})