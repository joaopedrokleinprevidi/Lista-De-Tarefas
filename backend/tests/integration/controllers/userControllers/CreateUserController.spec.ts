import Request from "supertest"
import app from "../../../../src/app"

import { deleteUserFactory, userCreateDataFactory, userFactory } from "../../../factories/UserFactory"
import { InvalidFieldsError } from "../../../../src/errors/ValidationErrors"
import { EmailAlreadyExistsError } from "../../../../src/errors/UserServiceError"

const userBodyRequest = {
    email: userCreateDataFactory.email,
    repeatEmail: userCreateDataFactory.email,
    password: userCreateDataFactory.password,
    repeatPassword: userCreateDataFactory.password
}

describe("UserControllers > CreateUserController", () => {

    describe("Creating user", () => {

        afterEach( async () => await deleteUserFactory() ) 

        it("Must create a user successfully", async () => {
            const response = await Request(app).post("/auth/signUp").send(userBodyRequest)
    
            expect(response.body).toEqual({ message: "User created successfully." })
        })
    
        it("Must return an error if the email is already in use", async () => {
            await userFactory()
    
            const response = await Request(app).post("/auth/signUp").send(userBodyRequest)
    
            const errorExpected = new EmailAlreadyExistsError()

            expect(response.body).toEqual({ error: errorExpected.json })
        })
    })

    it("Must return an error if the parameters are wrong", async () => {
        const response = await Request(app).post("/auth/signUp").send({})

        const fieldErrors = [
            'O campo "email" é obrigatório. ',
            'O campo "password" é obrigatório. ',
            'O campo "repeatEmail" é obrigatório. ',
            'O campo "repeatPassword" é obrigatório. '
        ]

        const errorExpected = new InvalidFieldsError(fieldErrors)

        expect(response.statusCode).toEqual(400)
        expect(response.body).toEqual({ error: errorExpected.json })
    })
})