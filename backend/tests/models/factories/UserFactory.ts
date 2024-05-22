import { createUser, deleteUser, getUserByEmail } from "../../../src/services/firebaseAdminService"

export const userCreateDataFactory = { email: "johnJou@gmail.com", password: "senha123" }

export const userFactory = async () => {
    return await createUser(userCreateDataFactory.email, userCreateDataFactory.password)
}

export const deleteUserFactory = async () => {
    const user = await getUserByEmail(userCreateDataFactory.email)

    if( user ) await deleteUser(user.uid)
}